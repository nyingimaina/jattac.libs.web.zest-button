# Bootstrap.ps1 — Sets up repository for AI agent development (Windows/PowerShell)
# This script is idempotent. Running it multiple times is safe.

$ErrorActionPreference = "Stop"

Write-Host "Bootstrapping repository..."
Write-Host ""

# Configure git hooks
git config core.hooksPath .githooks
Write-Host "OK: Git hooks configured"

# Verify hooks exist
$hooks = @("pre-commit", "commit-msg", "pre-push", "pre-merge-commit")
foreach ($hook in $hooks) {
    $path = ".githooks\$hook"
    if (-not (Test-Path $path)) {
        Write-Host "ERROR: Missing hook: $path"
        exit 1
    }
}
Write-Host "OK: Hooks verified"

# Configure push-master alias
git config alias.push-master '!ALLOW_PROTECTED_BRANCH_PUSH=1 git push'
Write-Host "OK: push-master alias configured"

# Verify core.hooksPath
$currentPath = git config core.hooksPath
if ($currentPath -ne ".githooks") {
    Write-Host "ERROR: core.hooksPath is '$currentPath', expected '.githooks'"
    exit 1
}
Write-Host "OK: core.hooksPath verified"

Write-Host ""
Write-Host "==================================="
Write-Host "Bootstrap Complete"
Write-Host "==================================="
Write-Host ""
Write-Host "Hooks installed:"
Write-Host "  pre-commit       - file size, secrets detection"
Write-Host "  commit-msg       - conventional commit validation"
Write-Host "  pre-push         - branch protection + e2e gate"
Write-Host "  pre-merge-commit - conflict detection"
Write-Host ""
Write-Host "Protected branches: master, main, trunk, production, release"
Write-Host "Override: git push-master"
Write-Host ""
Write-Host "Repository ready."
