<#
.SYNOPSIS
    Pre-Implementation Readiness Check - verifies all prerequisites before coding begins.

.DESCRIPTION
    Runs all prerequisite phases and generates an HTML report with pass/fail status.
    Exits with code 0 if all phases pass (READY), 1 otherwise (NOT READY).

.PARAMETER SkipE2E
    Skip database reachability check.

.EXAMPLE
    ./verify-pre.ps1
    ./verify-pre.ps1 -SkipE2E
#>
param(
    [switch]$SkipE2E
)

$ErrorActionPreference = "Continue"
Add-Type -AssemblyName System.Web
$script:ExitCode = 0
$script:StartTime = Get-Date

$repoRoot = Split-Path $PSScriptRoot -Parent
$projectRoot = $repoRoot
$reportDir = Join-Path $projectRoot "test-reports"
$timestamp = Get-Date -Format "yyyy-MM-dd_HHmmss"
$htmlReport = Join-Path $reportDir "pre-verify-$timestamp.html"

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
    $overallText = if ($allPassed) { "READY TO PROCEED" } else { "NOT READY" }
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
        $statusBg = switch ($p.Status) {
            "PASS"    { "#f0fdf4" }
            "FAIL"    { "#fef2f2" }
            "SKIPPED" { "#fefce8" }
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

    # Failure details
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
<title>Pre-Implementation $emDash Readiness Report</title>
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
        <h1>Pre-Implementation Readiness Report</h1>
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
    <div class="section-title">Prerequisites</div>
    <div class="phases-grid">
        $phaseCards
    </div>
    $failureDetails
    <div class="footer">Pre-Implementation Readiness $emDash verify-pre.ps1</div>
</div>
</body>
</html>
"@

    $utf8Bom = New-Object System.Text.UTF8Encoding $true
    [System.IO.File]::WriteAllText($OutputPath, $html, $utf8Bom)
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 0: Test Reporting Configuration
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 0: Test Reporting Configuration" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$configIssues = @()

# Detect platforms (both = .NET + Node.js, neither = skip)
$hasDotnet = Test-Path (Get-ChildItem $projectRoot -Filter "*.csproj" -Recurse -ErrorAction SilentlyContinue | Select-Object -First 1).FullName -ErrorAction SilentlyContinue
$hasNode = Test-Path (Join-Path $projectRoot "package.json")

if (-not $hasDotnet -and -not $hasNode) {
    Write-Host "  SKIPPED (no .NET or Node.js project detected)" -ForegroundColor Yellow
    Add-Phase "Test Reporting Config" "SKIPPED" "No .NET or Node.js project detected in $projectRoot" -DurationSec 0
    $hasDotnet = $false
    $hasNode = $false
} else {
    # Check .NET project
    if ($hasDotnet) {
        # Check coverlet
        $coverletCheck = & dotnet list package 2>&1 | Out-String
        if ($coverletCheck -notmatch "coverlet") {
            $configIssues += "coverlet.collector not installed (run: dotnet add package coverlet.collector)"
        }

        # Check .runsettings
        if (-not (Test-Path (Join-Path $projectRoot ".runsettings"))) {
            $configIssues += ".runsettings not found at project root"
        }
    }

    # Check Node.js project
    if ($hasNode) {
        # Check jest config
        $jestConfig = Get-ChildItem $projectRoot -Filter "jest.config.*" -ErrorAction SilentlyContinue | Select-Object -First 1
        if (-not $jestConfig) {
            $configIssues += "jest.config.js not found"
        } elseif ((Get-Content $jestConfig.FullName -Raw) -notmatch "json-summary") {
            $configIssues += "jest.config.js is missing coverageReporters: ['json-summary', ...] (needed for coverage/coverage-summary.json)"
        }
    }

    # Check for test projects
    $testProjects = Get-ChildItem $projectRoot -Filter "*.Tests.csproj" -Recurse -ErrorAction SilentlyContinue
    $hasTests = $null -ne $testProjects -or $hasNode

    $configDur = ((Get-Date) - $phaseStart).TotalSeconds

    if ($configIssues.Count -gt 0) {
        $issueText = $configIssues -join "`n"
        Write-Host "  ISSUES FOUND" -ForegroundColor Yellow
        Write-Host "  $issueText" -ForegroundColor Yellow
        Add-Phase "Test Reporting Config" "FAIL" ($configIssues -join "; ") -DurationSec $configDur -Output $issueText
        $script:ExitCode = 1
    } else {
        Write-Host "  PASSED" -ForegroundColor Green
        Add-Phase "Test Reporting Config" "PASS" "All reporting configuration verified" -DurationSec $configDur
    }
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 1: BRS Verification
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 1: BRS Verification" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$brsFound = $false
$brsPath = ""

# Search the whole project for BRS.md, not just "Features"-named directories.
# This project co-locates BRS.md directly with the feature code it describes
# (e.g. app/.../revenue/BRS.md) with no "Features" folder naming convention,
# so a directory-name filter misses it entirely. Prefer the most recently
# modified BRS.md, since that's the one most likely relevant to current work.
$allBrsFiles = Get-ChildItem $projectRoot -Filter "BRS.md" -Recurse -ErrorAction SilentlyContinue |
    Where-Object { $_.FullName -notmatch "\\node_modules\\" } |
    Sort-Object LastWriteTime -Descending

if ($allBrsFiles.Count -gt 0) {
    $brsFound = $true
    $brsPath = $allBrsFiles[0].FullName
}

$brsDur = ((Get-Date) - $phaseStart).TotalSeconds

if ($brsFound) {
    $brsContent = Get-Content $brsPath -Raw
    $issues = @()

    # Check required sections
    if ($brsContent -notmatch "Acceptance Criteria|acceptance criteria") { $issues += "Missing acceptance criteria" }
    if ($brsContent -notmatch "Out of Scope|out of scope") { $issues += "Missing out of scope section" }
    if ($brsContent -notmatch "Definition of Done|definition of done") { $issues += "Missing definition of done" }

    # Check approval status. "Complete" is also treated as approved: per the
    # AI_BRS.md template's own Status enum (Draft / Approved / Implementing /
    # Complete), a BRS cannot legitimately reach Complete without having been
    # Approved first — rejecting "Complete" here would be a false negative.
    $approved = $false
    if ($brsContent -match "(?i)Status:\s*(Approved|Complete)") { $approved = $true }
    elseif ($brsContent -match "(?i)Approved:\s*Yes") { $approved = $true }
    elseif ($brsContent -match "(?i)Approval:\s*Granted") { $approved = $true }
    elseif ($brsContent -match "(?i)User\s*Approved:") { $approved = $true }
    # The BRS.md template (AI_BRS.md) renders Status as a markdown table row
    # ("| Status | Approved |"), not colon-separated plain text — match that too.
    elseif ($brsContent -match "(?i)\|\s*Status\s*\|\s*(Approved|Complete)\s*\|") { $approved = $true }

    if (-not $approved) {
        $issues += "BRS not approved by user (look for 'Status: Approved' or 'Approved: Yes')"
    }

    if ($issues.Count -gt 0) {
        Write-Host "  FAILED ($($issues.Count) issues)" -ForegroundColor Red
        Add-Phase "BRS Verification" "FAIL" "BRS at ${brsPath}: $($issues -join '; ')" -DurationSec $brsDur -Output ($issues -join "`n")
        $script:ExitCode = 1
    } else {
        Write-Host "  PASSED (approved BRS at $brsPath)" -ForegroundColor Green
        Add-Phase "BRS Verification" "PASS" "Approved BRS found at $brsPath with all required sections" -DurationSec $brsDur
    }
} else {
    Write-Host "  FAILED (no BRS.md found)" -ForegroundColor Red
    Add-Phase "BRS Verification" "FAIL" "No BRS.md found in feature directories or project root" -DurationSec $brsDur
    $script:ExitCode = 1
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 2: Git State
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 2: Git State" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$protectedBranches = @("master", "main", "trunk", "production", "release")

try {
    $currentBranch = & git symbolic-ref --short HEAD 2>&1 | Out-String
    $currentBranch = $currentBranch.Trim()
    $isProtected = $protectedBranches -contains $currentBranch

    $gitStatus = & git status --porcelain 2>&1 | Out-String
    $hasChanges = -not [string]::IsNullOrWhiteSpace($gitStatus)

    $gitDur = ((Get-Date) - $phaseStart).TotalSeconds

    if ($isProtected) {
        Write-Host "  FAILED (on protected branch: $currentBranch)" -ForegroundColor Red
        Add-Phase "Git State" "FAIL" "Currently on protected branch '$currentBranch'. Switch to a working branch." -DurationSec $gitDur
        $script:ExitCode = 1
    } elseif ($hasChanges) {
        Write-Host "  WARNING (uncommitted changes on $currentBranch)" -ForegroundColor Yellow
        Add-Phase "Git State" "PASS" "On working branch '$currentBranch' with uncommitted changes" -DurationSec $gitDur
    } else {
        Write-Host "  PASSED (on $currentBranch, clean working tree)" -ForegroundColor Green
        Add-Phase "Git State" "PASS" "On working branch '$currentBranch', clean working tree" -DurationSec $gitDur
    }
} catch {
    $gitDur = ((Get-Date) - $phaseStart).TotalSeconds
    Write-Host "  FAILED (not a git repository)" -ForegroundColor Red
    Add-Phase "Git State" "FAIL" "Not a git repository" -DurationSec $gitDur
    $script:ExitCode = 1
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 3: Tool Availability
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 3: Tool Availability" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$missingTools = @()

# Check dotnet
try {
    $dotnetVersion = & dotnet --version 2>&1 | Out-String
    $dotnetVersion = $dotnetVersion.Trim()
    Write-Host "  dotnet: $dotnetVersion" -ForegroundColor Gray
} catch {
    $missingTools += "dotnet SDK"
}

# Check node
try {
    $nodeVersion = & node --version 2>&1 | Out-String
    $nodeVersion = $nodeVersion.Trim()
    Write-Host "  node:   $nodeVersion" -ForegroundColor Gray
} catch {
    if ($hasNode) { $missingTools += "Node.js" }
}

# Check npx
try {
    $npxVersion = & npx --version 2>&1 | Out-String
    $npxVersion = $npxVersion.Trim()
    Write-Host "  npx:    $npxVersion" -ForegroundColor Gray
} catch {
    if ($hasNode) { $missingTools += "npx" }
}

$toolDur = ((Get-Date) - $phaseStart).TotalSeconds

if ($missingTools.Count -gt 0) {
    Write-Host "  FAILED (missing: $($missingTools -join ', '))" -ForegroundColor Red
    Add-Phase "Tool Availability" "FAIL" "Missing tools: $($missingTools -join ', '). Please install manually." -DurationSec $toolDur
    $script:ExitCode = 1
} else {
    Write-Host "  PASSED" -ForegroundColor Green
    Add-Phase "Tool Availability" "PASS" "All required tools available" -DurationSec $toolDur
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 4: Dependency Restoration
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 4: Dependency Restoration" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$depIssues = @()

# Check .NET restore
if ($hasDotnet) {
    $restoreOutput = & dotnet restore $projectRoot 2>&1 | Out-String
    $restoreExit = $LASTEXITCODE
    if ($restoreExit -ne 0) {
        $depIssues += "dotnet restore failed"
    }
}

# Check npm install
if ($hasNode) {
    $nodeModules = Join-Path $projectRoot "node_modules"
    if (-not (Test-Path $nodeModules)) {
        $depIssues += "node_modules not found (run: npm install)"
    }
}

$depDur = ((Get-Date) - $phaseStart).TotalSeconds

if (-not $hasDotnet -and -not $hasNode) {
    Write-Host "  SKIPPED (no project detected)" -ForegroundColor Yellow
    Add-Phase "Dependency Restoration" "SKIPPED" "No .NET or Node.js project detected" -DurationSec $depDur
} elseif ($depIssues.Count -gt 0) {
    Write-Host "  FAILED ($($depIssues -join ', '))" -ForegroundColor Red
    Add-Phase "Dependency Restoration" "FAIL" ($depIssues -join "; ") -DurationSec $depDur
    $script:ExitCode = 1
} else {
    Write-Host "  PASSED" -ForegroundColor Green
    Add-Phase "Dependency Restoration" "PASS" "All dependencies restored" -DurationSec $depDur
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 5: Configuration Check
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 5: Configuration Check" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$configMissing = @()

if ($hasDotnet) {
    if (-not (Test-Path (Join-Path $projectRoot ".runsettings"))) {
        $configMissing += ".runsettings"
    }
}

if ($hasNode) {
    $jestConfig = Get-ChildItem $projectRoot -Filter "jest.config.*" -ErrorAction SilentlyContinue | Select-Object -First 1
    if (-not $jestConfig) {
        $configMissing += "jest.config.js"
    }
}

$configChkDur = ((Get-Date) - $phaseStart).TotalSeconds

if ($configMissing.Count -gt 0) {
    Write-Host "  FAILED (missing: $($configMissing -join ', '))" -ForegroundColor Red
    Add-Phase "Configuration Check" "FAIL" "Missing configuration files: $($configMissing -join ', '). See AI_TEST_CONFIGURATION.md." -DurationSec $configChkDur
    $script:ExitCode = 1
} else {
    Write-Host "  PASSED" -ForegroundColor Green
    Add-Phase "Configuration Check" "PASS" "All configuration files present" -DurationSec $configChkDur
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 6: Database Reachability
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 6: Database Reachability" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date

if ($SkipE2E) {
    Write-Host "  SKIPPED (flag: -SkipE2E)" -ForegroundColor Yellow
    Add-Phase "Database Reachability" "SKIPPED" "Skipped via -SkipE2E flag"
} else {
    try {
        $tcp = New-Object System.Net.Sockets.TcpClient
        $tcp.Connect("localhost", 3306)
        $tcp.Close()
        $dbDur = ((Get-Date) - $phaseStart).TotalSeconds
        Write-Host "  PASSED (MariaDB reachable on localhost:3306)" -ForegroundColor Green
        Add-Phase "Database Reachability" "PASS" "MariaDB reachable on localhost:3306" -DurationSec $dbDur
    } catch {
        $dbDur = ((Get-Date) - $phaseStart).TotalSeconds
        Write-Host "  FAILED (MariaDB not reachable on localhost:3306)" -ForegroundColor Red
        Add-Phase "Database Reachability" "FAIL" "MariaDB not reachable on localhost:3306. Start MariaDB to enable E2E tests." -DurationSec $dbDur
        $script:ExitCode = 1
    }
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 7: Pattern Discovery
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 7: Pattern Discovery" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date
$patternsFound = 0

# Look for common patterns
if ($hasDotnet) {
    $services = Get-ChildItem $projectRoot -Filter "*Service.cs" -Recurse -ErrorAction SilentlyContinue
    $controllers = Get-ChildItem $projectRoot -Filter "*Controller.cs" -Recurse -ErrorAction SilentlyContinue
    $repositories = Get-ChildItem $projectRoot -Filter "*Repository.cs" -Recurse -ErrorAction SilentlyContinue
    $patternsFound = ($services | Measure-Object).Count + ($controllers | Measure-Object).Count + ($repositories | Measure-Object).Count
}

if ($hasNode) {
    # This project uses the Next.js App Router directly under app/, not src/.
    $componentRoot = Join-Path $projectRoot "app"
    $components = Get-ChildItem $componentRoot -Filter "*.tsx" -Recurse -ErrorAction SilentlyContinue
    $hooks = Get-ChildItem $componentRoot -Filter "use*.ts" -Recurse -ErrorAction SilentlyContinue
    $patternsFound += ($components | Measure-Object).Count + ($hooks | Measure-Object).Count
}

$patternDur = ((Get-Date) - $phaseStart).TotalSeconds

if ($patternsFound -ge 2) {
    Write-Host "  PASSED ($patternsFound patterns found)" -ForegroundColor Green
    Add-Phase "Pattern Discovery" "PASS" "Found $patternsFound code patterns to match" -DurationSec $patternDur
} else {
    Write-Host "  FAILED (only $patternsFound patterns found, need at least 2)" -ForegroundColor Red
    Add-Phase "Pattern Discovery" "FAIL" "Found only $patternsFound code patterns. Need at least 2 examples to match." -DurationSec $patternDur
    $script:ExitCode = 1
}

# ═══════════════════════════════════════════════════════════════════
# PHASE 8: Impact Analysis Readiness
# ═══════════════════════════════════════════════════════════════════
Write-Host "`n========================================" -ForegroundColor Cyan
Write-Host "  PHASE 8: Impact Analysis Readiness" -ForegroundColor Cyan
Write-Host "========================================`n" -ForegroundColor Cyan

$phaseStart = Get-Date

# Check if we can identify callers/callees (basic check: solution/project files exist)
$solutionFiles = Get-ChildItem $projectRoot -Filter "*.sln" -ErrorAction SilentlyContinue
$csprojFiles = Get-ChildItem $projectRoot -Filter "*.csproj" -Recurse -ErrorAction SilentlyContinue

$impactReady = $false
if (($solutionFiles | Measure-Object).Count -gt 0 -or ($csprojFiles | Measure-Object).Count -gt 0) {
    $impactReady = $true
}

if ($hasNode -and (Test-Path (Join-Path $projectRoot "app"))) {
    $impactReady = $true
}

$impactDur = ((Get-Date) - $phaseStart).TotalSeconds

if ($impactReady) {
    Write-Host "  PASSED (project structure identifiable)" -ForegroundColor Green
    Add-Phase "Impact Analysis Readiness" "PASS" "Project structure can be traced for impact analysis" -DurationSec $impactDur
} else {
    Write-Host "  FAILED (cannot identify project structure)" -ForegroundColor Red
    Add-Phase "Impact Analysis Readiness" "FAIL" "Cannot identify project structure for impact analysis" -DurationSec $impactDur
    $script:ExitCode = 1
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
    Write-Host "  RESULT: READY TO PROCEED" -ForegroundColor Green
} else {
    Write-Host "  RESULT: NOT READY" -ForegroundColor Red
}
Write-Host "  Total time: $("{0:mm\:ss}" -f $totalElapsed)" -ForegroundColor Gray
Write-Host "========================================`n" -ForegroundColor $(if ($script:ExitCode -eq 0) { "Green" } else { "Red" })

exit $script:ExitCode
