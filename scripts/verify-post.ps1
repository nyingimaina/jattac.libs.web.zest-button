<#
.SYNOPSIS
    Post-Implementation Verification - validates completeness and detects regressions.

.DESCRIPTION
    Runs all post-implementation checks: test execution, coverage regression,
    test count regression, BRS compliance, change manifest, E2E marker.
    Generates an HTML report with pass/fail status.
    Exits with code 0 if all checks pass, 1 otherwise.

.PARAMETER BRSPath
    Path to the BRS.md file for this feature.

.PARAMETER ManifestPath
    Path to the change manifest file.

.PARAMETER SkipE2E
    Skip database reachability check.

.PARAMETER SkipE2EMarker
    Skip E2E marker file creation.

.PARAMETER ForceBaseline
    Force baseline update even if tests fail.

.EXAMPLE
    ./verify-post.ps1 -BRSPath "src/Features/User/BRS.md" -ManifestPath "docs/manifest.md"
    ./verify-post.ps1 -SkipE2E -SkipE2EMarker
#>
param(
    [string]$BRSPath = "",
    [string]$ManifestPath = "",
    [switch]$SkipE2E,
    [switch]$SkipE2EMarker,
    [switch]$ForceBaseline
)

$ErrorActionPreference = "Continue"
Add-Type -AssemblyName System.Web
$script:ExitCode = 0
$script:StartTime = Get-Date

$repoRoot = Split-Path $PSScriptRoot -Parent
$projectRoot = $repoRoot
$reportDir = Join-Path $projectRoot "test-reports"
$timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
$htmlReport = Join-Path $reportDir "post-verify-$timestamp.html"
$baselineFile = Join-Path $reportDir "coverage-baseline.json"

New-Item -ItemType Directory -Path $reportDir -Force | Out-Null

$script:Phases = [System.Collections.ArrayList]::new()

function Add-Phase {
    param(
        [string]$Name, [string]$Status, [string]$Detail,
        [double]$DurationSec = 0, [string]$Output = ""
    )
    [void]$script:Phases.Add(@{
        Name        = $Name
        Status      = $Status
        Detail      = $Detail
        DurationSec = $DurationSec
        Output      = $Output
    })
}

# Turns absolute Windows file paths inside already-HTML-encoded text into
# clickable file:// links, so phase details/output can be clicked straight
# through to the file (e.g. a BRS.md path) instead of being plain text.
function Convert-PathsToLinks {
    param([string]$EncodedText)
    if ([string]::IsNullOrWhiteSpace($EncodedText)) { return $EncodedText }
    return [regex]::Replace($EncodedText, '[A-Za-z]:\\[^\s"''<>]+', {
        param($match)
        $path = $match.Value
        $href = "file:///" + ($path -replace '\\', '/')
        "<a href=`"$href`" target=`"_blank`">$path</a>"
    })
}

# ─── HTML Report Generator ────────────────────────────────────────
function New-HtmlReport {
    param([string]$OutputPath)

    $totalPassed = ($script:Phases | Where-Object { $_.Status -eq "PASS" } | Measure-Object).Count
    $totalFailed = ($script:Phases | Where-Object { $_.Status -eq "FAIL" } | Measure-Object).Count
    $totalSkipped = ($script:Phases | Where-Object { $_.Status -eq "SKIPPED" } | Measure-Object).Count
    $allPassed = $totalFailed -eq 0
    $overallColor = if ($allPassed) { "#16a34a" } else { "#dc2626" }
    $overallIcon = if ($allPassed) { "&#9989;" } else { "&#10060;" }
    $overallText = if ($allPassed) { "COMPLETE" } else { "INCOMPLETE" }
    $elapsed = (Get-Date) - $script:StartTime
    $elapsedStr = "{0:mm\:ss}" -f $elapsed

    $emDash = [char]0x2014

    $applicablePhases = $totalPassed + $totalFailed
    $skippedNote = if ($totalSkipped -gt 0) { " ($totalSkipped skipped for missing platforms)" } else { "" }

    $phaseCards = ""
    foreach ($p in $script:Phases) {
        $statusColor = switch ($p.Status) {
            "PASS"    { "#16a34a" }
            "FAIL"    { "#dc2626" }
            "SKIPPED" { "#ca8a04" }
        }
        $statusBorder = switch ($p.Status) {
            "PASS"    { "#bbf7d0" }
            "FAIL"    { "#fecaca" }
            "SKIPPED" { "#fde68a" }
        }
        $statusIcon = switch ($p.Status) {
            "PASS"    { "&#9989;" }
            "FAIL"    { "&#10060;" }
            "SKIPPED" { "&#9888;&#65039;" }
        }
        $dur = if ($p.DurationSec -gt 0) { "{0:N1}s" -f $p.DurationSec } else { $emDash }

        $detailHtml = ""
        if ($p.Detail) {
            $linkedDetail = Convert-PathsToLinks ([System.Web.HttpUtility]::HtmlEncode($p.Detail))
            $detailHtml = "<div class='phase-detail'>$linkedDetail</div>"
        }

        $phaseCards += @"
        <div class="phase-card" style="border-left-color:$statusBorder;">
            <div class="phase-header">
                <span class="phase-icon">$statusIcon</span>
                <span class="phase-name">$($p.Name)</span>
                <span class="phase-dur">$dur</span>
            </div>
            <div class="phase-status" style="color:$statusColor;font-weight:600;">$($p.Status)</div>
            $detailHtml
        </div>
"@
    }

    $failureDetails = ""
    foreach ($p in $script:Phases) {
        if ($p.Status -ne "FAIL" -or [string]::IsNullOrWhiteSpace($p.Output)) { continue }
        $escapedOutput = Convert-PathsToLinks ([System.Web.HttpUtility]::HtmlEncode($p.Output))
        $failureDetails += @"
        <details class="failure-details">
            <summary>$($p.Name) $emDash Failure Output</summary>
            <pre class="failure-output">$escapedOutput</pre>
        </details>
"@
    }

    $html = @"
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Post-Implementation $emDash Verification Report</title>
<style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        background: #f1f5f9; color: #1e293b; line-height: 1.5;
        padding: 1rem; font-size: 15px;
    }
    @media (min-width: 640px) { body { padding: 1.5rem; } }
    @media (min-width: 1024px) { body { padding: 2rem; font-size: 16px; } }
    .container { max-width: 960px; margin: 0 auto; }
    .header {
        background: #fff; border-radius: 10px; padding: 1rem 1.25rem;
        margin-bottom: 1rem; box-shadow: 0 1px 3px rgba(0,0,0,0.06);
        border-left: 5px solid $overallColor;
    }
    @media (min-width: 640px) { .header { padding: 1.5rem 2rem; margin-bottom: 1.25rem; border-radius: 12px; } }
    .header h1 { font-size: 1.15rem; margin-bottom: 0.15rem; }
    @media (min-width: 640px) { .header h1 { font-size: 1.4rem; } }
    .header .meta { color: #64748b; font-size: 0.8rem; }
    .verdict {
        text-align: center; padding: 1.25rem 1rem; background: #fff;
        border-radius: 10px; margin-bottom: 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06);
    }
    .verdict .icon { font-size: 2.25rem; }
    @media (min-width: 640px) { .verdict .icon { font-size: 3rem; } }
    .verdict .label { font-size: 1.5rem; font-weight: 700; color: $overallColor; margin: 0.35rem 0 0.2rem; }
    @media (min-width: 640px) { .verdict .label { font-size: 2rem; } }
    .verdict .sub { color: #64748b; font-size: 0.8rem; }
    .stats {
        display: grid; grid-template-columns: repeat(4, 1fr); gap: 0.75rem;
        margin-bottom: 1rem;
    }
    .stat {
        background: #fff; border-radius: 10px; padding: 0.75rem 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06); text-align: center;
    }
    .stat .stat-val { font-size: 1.5rem; font-weight: 700; }
    .stat .stat-label { font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.04em; font-weight: 600; }
    .section-title { font-size: 0.95rem; font-weight: 700; color: #334155; margin-bottom: 0.75rem; }
    .phases-grid { display: grid; gap: 0.65rem; margin-bottom: 1.25rem; }
    @media (min-width: 640px) { .phases-grid { grid-template-columns: repeat(2, 1fr); gap: 0.85rem; } }
    .phase-card {
        background: #fff; border-radius: 10px; padding: 0.85rem 1rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06); border-left: 4px solid #e2e8f0;
    }
    .phase-header { display: flex; align-items: center; gap: 0.4rem; margin-bottom: 0.35rem; }
    .phase-icon { font-size: 1rem; flex-shrink: 0; }
    .phase-name { font-weight: 600; font-size: 0.875rem; flex: 1; }
    .phase-dur { font-size: 0.75rem; color: #94a3b8; flex-shrink: 0; }
    .phase-status { font-size: 0.8rem; margin-bottom: 0.15rem; }
    .phase-detail { font-size: 0.75rem; color: #94a3b8; margin-top: 0.25rem; }
    .failure-details {
        background: #fff; border-radius: 10px; margin-bottom: 0.85rem;
        box-shadow: 0 1px 3px rgba(0,0,0,0.06); overflow: hidden;
    }
    .failure-details summary {
        padding: 0.75rem 1rem; cursor: pointer; font-weight: 600;
        font-size: 0.875rem; color: #dc2626; user-select: none;
    }
    .failure-output {
        background: #1e293b; color: #e2e8f0; padding: 0.85rem 1rem;
        font-size: 0.75rem; overflow-x: auto; max-height: 350px; overflow-y: auto;
        white-space: pre-wrap; word-break: break-word; margin: 0;
        font-family: 'SF Mono', 'Cascadia Code', Consolas, monospace;
    }
    .footer { text-align: center; color: #94a3b8; font-size: 0.75rem; margin-top: 1.5rem; padding-bottom: 1rem; }
</style>
</head>
<body>
<div class="container">
    <div class="header">
        <h1>Post-Implementation Verification Report</h1>
        <div class="meta">$(Get-Date -Format "yyyy-MM-dd HH:mm:ss") $emDash $elapsedStr</div>
    </div>
    <div class="verdict">
        <div class="icon">$overallIcon</div>
        <div class="label">$overallText</div>
        <div class="sub">$totalPassed passed, $totalFailed failed$skippedNote</div>
    </div>
    <div class="stats">
        <div class="stat"><div class="stat-val" style="color:#16a34a;">$totalPassed</div><div class="stat-label">Passed</div></div>
        <div class="stat"><div class="stat-val" style="color:#dc2626;">$totalFailed</div><div class="stat-label">Failed</div></div>
        <div class="stat"><div class="stat-val" style="color:#ca8a04;">$totalSkipped</div><div class="stat-label">Skipped</div></div>
        <div class="stat"><div class="stat-val" style="color:#64748b;">$elapsedStr</div><div class="stat-label">Duration</div></div>
    </div>
    <div class="section-title">Verification Checks</div>
    <div class="phases-grid">
        $phaseCards
    </div>
    $failureDetails
    <div class="footer">Post-Implementation Verification $emDash verify-post.ps1</div>
</div>
</body>
</html>
"@

    $utf8Bom = New-Object System.Text.UTF8Encoding $true
    [System.IO.File]::WriteAllText($OutputPath, $html, $utf8Bom)
}

# ═══════════════════════════════════════════════════════════════════
# Detect project types
# ═══════════════════════════════════════════════════════════════════
$hasDotnet = Test-Path (Get-ChildItem $projectRoot -Filter "*.csproj" -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1).FullName -ErrorAction SilentlyContinue
$hasNode = Test-Path (Join-Path $projectRoot "package.json")

if (-not $hasDotnet -and -not $hasNode) {
    Write-Host "`n  No .NET or Node.js project detected. Generating empty report." -ForegroundColor Yellow
    Add-Phase "Test Execution" "SKIPPED" "No .NET or Node.js project detected in $projectRoot"
    Add-Phase "Coverage Regression" "SKIPPED" "No project to test"
    Add-Phase "Test Count Regression" "SKIPPED" "No project to test"
    New-HtmlReport $htmlReport
    Write-Host "  Report: $htmlReport" -ForegroundColor White
    Start-Process $htmlReport
    exit 0
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 0: Test Execution
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 0: Test Execution" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$testOutput = ""
$testExitCode = 0
$totalTests = 0
$passedTests = 0
$failedTests = 0
$skippedTests = 0
$coveragePercent = 0

if ($hasDotnet) {
    Write-Host "  Running dotnet test..." -ForegroundColor Gray
    $dotnetArgs = @("test", $projectRoot, "--no-restore", "--verbosity", "normal")
    if (Test-Path $baselineFile) {
        $dotnetArgs += @("--collect:XPlat Code Coverage", "--results-directory", $reportDir)
    }
    $testOutput = & dotnet @dotnetArgs 2>&1 | Out-String
    $testExitCode = $LASTEXITCODE

    # Parse test results
    if ($testOutput -match "Passed:\s+(\d+)") { $passedTests = [int]$Matches[1] }
    if ($testOutput -match "Failed:\s+(\d+)") { $failedTests = [int]$Matches[1] }
    if ($testOutput -match "Skipped:\s+(\d+)") { $skippedTests = [int]$Matches[1] }
    $totalTests = $passedTests + $failedTests + $skippedTests

    # Parse coverage
    $coverageFiles = Get-ChildItem $reportDir -Filter "coverage.cobertura.xml" -Recurse -ErrorAction SilentlyContinue |
        Sort-Object LastWriteTime -Descending | Select-Object -First 1
    if ($coverageFiles) {
        $coverageXml = [xml](Get-Content $coverageFiles.FullName -Raw)
        $lineRate = $coverageXml.coverage."line-rate"
        $coveragePercent = [math]::Round([double]$lineRate * 100, 2)
    }
}

if ($hasNode) {
    Write-Host "  Running jest..." -ForegroundColor Gray
    $testOutput = & npx jest --coverage --coverageReporters=json-summary 2>&1 | Out-String
    $testExitCode = $LASTEXITCODE

    # Parse jest's "Tests:" summary line, e.g. "Tests:       1 failed, 2 skipped, 9 passed, 12 total"
    if ($testOutput -match "(?m)^Tests:\s+(.+)$") {
        $testsLine = $Matches[1]
        if ($testsLine -match "(\d+)\s+passed") { $passedTests = [int]$Matches[1] }
        if ($testsLine -match "(\d+)\s+failed") { $failedTests = [int]$Matches[1] }
        if ($testsLine -match "(\d+)\s+skipped") { $skippedTests = [int]$Matches[1] }
        if ($testsLine -match "(\d+)\s+total") { $totalTests = [int]$Matches[1] }
    }

    # Parse coverage percentage from coverage-summary.json (written by the json-summary reporter)
    $coverageSummaryFile = Join-Path $projectRoot "coverage\coverage-summary.json"
    if (Test-Path $coverageSummaryFile) {
        $coverageSummary = Get-Content $coverageSummaryFile -Raw | ConvertFrom-Json
        $coveragePercent = [math]::Round([double]$coverageSummary.total.lines.pct, 2)
    }
}

$testDur = ((Get-Date) - $phaseStart).TotalSeconds

$testDetail = "Total: $totalTests | Passed: $passedTests | Failed: $failedTests | Skipped: $skippedTests | Coverage: ${coveragePercent}%"
Write-Host "  $testDetail" -ForegroundColor Gray

if ($testExitCode -ne 0 -or $failedTests -gt 0) {
    Write-Host "  FAILED (test failures detected)" -ForegroundColor Red
    Add-Phase "Test Execution" "FAIL" $testDetail -DurationSec $testDur -Output $testOutput
    $script:ExitCode = 1
} else {
    Write-Host "  PASSED" -ForegroundColor Green
    Add-Phase "Test Execution" "PASS" $testDetail -DurationSec $testDur
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 1: Coverage Regression Detection
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 1: Coverage Regression Detection" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$baselineExists = Test-Path $baselineFile
$baselineCoverage = 0
$coverageDelta = 0
$regressionDetected = $false

if ($baselineExists) {
    $baseline = Get-Content $baselineFile -Raw | ConvertFrom-Json
    $baselineCoverage = $baseline.coverage_percent
    $coverageDelta = [math]::Round($coveragePercent - $baselineCoverage, 2)

    if ($coveragePercent -lt $baselineCoverage -and -not $ForceBaseline) {
        $regressionDetected = $true
        $regressionDetail = "Coverage decreased from ${baselineCoverage}% to ${coveragePercent}% (delta: ${coverageDelta}%). See AI_TEST_CONFIGURATION.md."
        Write-Host "  FAILED (regression: -${([math]::Abs($coverageDelta))}%)" -ForegroundColor Red
        Add-Phase "Coverage Regression" "FAIL" $regressionDetail -DurationSec ((Get-Date) - $phaseStart).TotalSeconds -Output "Baseline: ${baselineCoverage}%`nCurrent: ${coveragePercent}%`nDelta: ${coverageDelta}%`n`nThe coverage must never decrease from baseline. Add tests for new functionality and remove tests for deleted code."
        $script:ExitCode = 1
    } else {
        $dir = if ($coverageDelta -ge 0) { "+" } else { "" }
        $dirColor = if ($coverageDelta -ge 0) { "Green" } else { "Yellow" }
        Write-Host "  PASSED (${dir}${coverageDelta}% from ${baselineCoverage}%)" -ForegroundColor $dirColor
        Add-Phase "Coverage Regression" "PASS" "Coverage ${dir}${coverageDelta}% (${baselineCoverage}% -> ${coveragePercent}%)" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
    }
} else {
    Write-Host "  PASSED (no baseline yet, establishing)" -ForegroundColor Green
    Add-Phase "Coverage Regression" "PASS" "No baseline file found. First run establishes baseline." -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 2: Test Count Regression
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 2: Test Count Regression" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$testCountRegression = $false

if ($baselineExists) {
    $baseline = Get-Content $baselineFile -Raw | ConvertFrom-Json
    $baselineTotal = $baseline.total_tests

    if ($totalTests -lt $baselineTotal -and -not $ForceBaseline) {
        $testCountRegression = $true
        $countDetail = "Test count decreased from $baselineTotal to $totalTests. Tests were removed without replacement."
        Write-Host "  FAILED (test count: $baselineTotal -> $totalTests)" -ForegroundColor Red
        Add-Phase "Test Count Regression" "FAIL" $countDetail -DurationSec ((Get-Date) - $phaseStart).TotalSeconds -Output "Baseline: $baselineTotal tests`nCurrent: $totalTests tests`n`nTests for deleted code must be replaced with tests for replacement functionality."
        $script:ExitCode = 1
    } else {
        $countDelta = $totalTests - $baselineTotal
        $countDir = if ($countDelta -ge 0) { "+$countDelta" } else { "$countDelta" }
        Write-Host "  PASSED ($totalTests tests, ${countDir} from $baselineTotal)" -ForegroundColor Green
        Add-Phase "Test Count Regression" "PASS" "Test count ${countDir} (${baselineTotal} -> ${totalTests})" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
    }
} else {
    Write-Host "  PASSED (no baseline yet, establishing)" -ForegroundColor Green
    Add-Phase "Test Count Regression" "PASS" "No baseline file found. First run establishes baseline." -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 3: BRS Compliance
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 3: BRS Compliance" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$brsCompliant = $true

if ($BRSPath -and (Test-Path $BRSPath)) {
    $brsContent = Get-Content $BRSPath -Raw
    $issues = @()

    if ($brsContent -notmatch "Acceptance Criteria|acceptance criteria") { $issues += "Missing acceptance criteria" }
    if ($brsContent -notmatch "Out of Scope|out of scope") { $issues += "Missing out of scope section" }
    if ($brsContent -notmatch "Definition of Done|definition of done") { $issues += "Missing definition of done" }
    if ($brsContent -notmatch "Test Verification|test verification|tests pass") { $issues += "Missing test verification in DoD" }
    if ($brsContent -notmatch "Coverage Regression|coverage regression|no regression") { $issues += "Missing coverage regression clause" }

    # Check approval status
    $approved = $false
    if ($brsContent -match "(?i)Status:\s*Approved") { $approved = $true }
    elseif ($brsContent -match "(?i)Approved:\s*Yes") { $approved = $true }
    elseif ($brsContent -match "(?i)Approval:\s*Granted") { $approved = $true }
    elseif ($brsContent -match "(?i)User\s*Approved:") { $approved = $true }

    if (-not $approved) {
        $issues += "BRS not approved by user"
    }

    if ($issues.Count -gt 0) {
        $brsCompliant = $false
        $brsDetail = "BRS at $BRSPath is incomplete: $($issues -join ', ')"
        Write-Host "  FAILED ($($issues.Count) issues)" -ForegroundColor Red
        Add-Phase "BRS Compliance" "FAIL" $brsDetail -DurationSec ((Get-Date) - $phaseStart).TotalSeconds -Output ($issues -join "`n")
        $script:ExitCode = 1
    } else {
        Write-Host "  PASSED (BRS fully compliant)" -ForegroundColor Green
        Add-Phase "BRS Compliance" "PASS" "BRS at $BRSPath has all required sections" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
    }
} elseif ($BRSPath) {
    Write-Host "  FAILED (BRS not found at: $BRSPath)" -ForegroundColor Red
    Add-Phase "BRS Compliance" "FAIL" "BRS not found at: $BRSPath" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
    $script:ExitCode = 1
} else {
    Write-Host "  SKIPPED (no BRS path provided)" -ForegroundColor Yellow
    Add-Phase "BRS Compliance" "SKIPPED" "No BRS path provided. Use -BRSPath to specify."
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 4: Change Manifest Verification
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 4: Change Manifest Verification" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date

if ($ManifestPath -and (Test-Path $ManifestPath)) {
    $manifestContent = Get-Content $ManifestPath -Raw
    $issues = @()

    if ($manifestContent -notmatch "Changed Files|changed files|files changed") { $issues += "Missing changed files section" }
    if ($manifestContent -notmatch "Justification|justification") { $issues += "Missing justification for changes" }
    if ($manifestContent -notmatch "Testing|testing") { $issues += "Missing testing information" }

    if ($issues.Count -gt 0) {
        $manifestDetail = "Manifest at $ManifestPath is incomplete: $($issues -join ', ')"
        Write-Host "  FAILED ($($issues.Count) issues)" -ForegroundColor Red
        Add-Phase "Change Manifest" "FAIL" $manifestDetail -DurationSec ((Get-Date) - $phaseStart).TotalSeconds -Output ($issues -join "`n")
        $script:ExitCode = 1
    } else {
        Write-Host "  PASSED (manifest complete)" -ForegroundColor Green
        Add-Phase "Change Manifest" "PASS" "Manifest at $ManifestPath has all required sections" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
    }
} elseif ($ManifestPath) {
    Write-Host "  FAILED (manifest not found at: $ManifestPath)" -ForegroundColor Red
    Add-Phase "Change Manifest" "FAIL" "Manifest not found at: $ManifestPath" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
    $script:ExitCode = 1
} else {
    Write-Host "  SKIPPED (no manifest path provided)" -ForegroundColor Yellow
    Add-Phase "Change Manifest" "SKIPPED" "No manifest path provided. Use -ManifestPath to specify."
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 5: E2E Marker File
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 5: E2E Marker File" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$markerFile = Join-Path $projectRoot ".e2e-passed"

if ($SkipE2EMarker) {
    Write-Host "  SKIPPED (flag: -SkipE2EMarker)" -ForegroundColor Yellow
    Add-Phase "E2E Marker" "SKIPPED" "Skipped via -SkipE2EMarker flag"
} else {
    # Check if E2E tests exist
    $e2eTestDir = Get-ChildItem $projectRoot -Directory -Recurse -ErrorAction SilentlyContinue |
        Where-Object { $_.Name -match "e2e|E2E" } |
        Select-Object -First 1

    if ($e2eTestDir) {
        # Run E2E tests
        Write-Host "  Running E2E tests..." -ForegroundColor Gray
        $e2eOutput = ""
        $e2eExitCode = 0

        if ($hasDotnet) {
            $e2eArgs = @("test", $e2eTestDir.FullName, "--no-restore", "--verbosity", "normal")
            $e2eOutput = & dotnet @e2eArgs 2>&1 | Out-String
            $e2eExitCode = $LASTEXITCODE
        }

        if ($hasNode) {
            $e2eOutput = & npx jest --roots "$($e2eTestDir.FullName)" 2>&1 | Out-String
            $e2eExitCode = $LASTEXITCODE
        }

        if ($e2eExitCode -eq 0) {
            # Create marker
            $markerContent = @{
                timestamp = (Get-Date -Format "o")
                branch = & git symbolic-ref --short HEAD 2>&1 | Out-String
                commit = & git rev-parse --short HEAD 2>&1 | Out-String
            }
            $markerContent | ConvertTo-Json | Set-Content $markerFile -Force
            Write-Host "  PASSED (E2E tests passed, marker created)" -ForegroundColor Green
            Add-Phase "E2E Marker" "PASS" "E2E tests passed. Marker file created at .e2e-passed" -DurationSec ((Get-Date) - $phaseStart).TotalSeconds
        } else {
            Write-Host "  FAILED (E2E tests failed)" -ForegroundColor Red
            Add-Phase "E2E Marker" "FAIL" "E2E tests failed. Cannot create marker file." -DurationSec ((Get-Date) - $phaseStart).TotalSeconds -Output $e2eOutput
            $script:ExitCode = 1
        }
    } else {
        Write-Host "  SKIPPED (no E2E test directory found)" -ForegroundColor Yellow
        Add-Phase "E2E Marker" "SKIPPED" "No E2E test directory found"
    }
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 6: Test Output Verification
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 6: Test Output Verification" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$outputIssues = @()

# Check for suspicious patterns in test output
$suspicionPatterns = @(
    "Skipped.*test",
    "No tests found",
    "Warning.*No tests",
    "Test run aborted"
)

foreach ($pattern in $suspicionPatterns) {
    if ($testOutput -match $pattern) {
        $outputIssues += "Suspicious pattern detected: $pattern"
    }
}

# Check for assertion count
if ($totalTests -gt 0 -and $passedTests -eq 0 -and $failedTests -eq 0) {
    $outputIssues += "Tests passed but zero assertions detected"
}

$outputDur = ((Get-Date) - $phaseStart).TotalSeconds

if ($outputIssues.Count -gt 0) {
    Write-Host "  FAILED ($($outputIssues.Count) issues)" -ForegroundColor Red
    Add-Phase "Test Output Verification" "FAIL" ($outputIssues -join "; ") -DurationSec $outputDur -Output ($outputIssues -join "`n")
    $script:ExitCode = 1
} else {
    Write-Host "  PASSED" -ForegroundColor Green
    Add-Phase "Test Output Verification" "PASS" "Test output appears clean" -DurationSec $outputDur
}

# ═══════════════════════════════════════════════════════════════════
# Update Baseline
# ═══════════════════════════════════════════════════════════════════
if ($script:ExitCode -eq 0 -or $ForceBaseline) {
    $baselineData = @{
        coverage_percent = $coveragePercent
        total_tests = $totalTests
        passed_tests = $passedTests
        failed_tests = $failedTests
        skipped_tests = $skippedTests
        timestamp = (Get-Date -Format "o")
        branch = ""
        commit = ""
    }
    try { $baselineData.branch = & git symbolic-ref --short HEAD 2>&1 | Out-String } catch {}
    try { $baselineData.commit = & git rev-parse --short HEAD 2>&1 | Out-String } catch {}
    $baselineData.branch = $baselineData.branch.Trim()
    $baselineData.commit = $baselineData.commit.Trim()

    $baselineData | ConvertTo-Json | Set-Content $baselineFile -Force
    Write-Host "`n  Baseline updated: $baselineFile" -ForegroundColor Gray
}

# ═══════════════════════════════════════════════════════════════════
# Report
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  Generating Report" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

New-HtmlReport $htmlReport
Write-Host "  Report: $htmlReport" -ForegroundColor White

Start-Process $htmlReport

$totalElapsed = (Get-Date) - $script:StartTime
Write-Host "`n========================================" -ForegroundColor $(if ($script:ExitCode -eq 0) { "Green" } else { "Red" })
if ($script:ExitCode -eq 0) {
    Write-Host "  RESULT: COMPLETE" -ForegroundColor Green
} else {
    Write-Host "  RESULT: INCOMPLETE" -ForegroundColor Red
}
Write-Host "  Total time: $("{0:mm\:ss}" -f $totalElapsed)" -ForegroundColor Gray
Write-Host "========================================`n" -ForegroundColor $(if ($script:ExitCode -eq 0) { "Green" } else { "Red" })

exit $script:ExitCode
