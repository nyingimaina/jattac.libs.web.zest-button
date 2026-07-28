# AI Test Configuration

## Terminology

The words MUST, MUST NOT, SHALL, SHALL NOT, SHOULD and MAY are to be interpreted as defined by RFC 2119.

---

## Purpose

Every project MUST have test reporting configured.

The LLM MUST verify configuration at the start of every session.

If reporting is not configured, the FIRST task is to configure it.

This document provides platform-specific setup instructions.

---

## Session Startup Procedure

The LLM MUST follow this procedure at the start of every session, before ANY task.

### Step 1 — Identify project type

Check for:

• `*.csproj` or `*.sln` files → .NET project

• `package.json` with `jest` → Node.js project

• Both → Full-stack project (configure both)

### Step 2 — Check tools

```
dotnet --version    (if .NET)
node --version      (if Node.js)
npx --version       (if Node.js)
```

If any tool is missing:

STOP.

Tell the user to install the missing tool.

Do NOT auto-install system-level tools.

Do NOT proceed until tools are available.

### Step 3 — Check packages

```
# .NET: Check for coverlet
dotnet list package | findstr coverlet

# Node: Check jest.config.js declares json-summary coverage reporter
findstr "json-summary" jest.config.js
```

If missing:

AUTO-INSTALL / AUTO-CONFIGURE:

```
# .NET
dotnet add package coverlet.collector

# Node — jest ships with coverage built in, no package install needed.
# Add coverageReporters: ['json-summary', 'text', 'lcov'] to jest.config.js instead.
```

Do NOT ask permission. Packages and config are project-level.

### Step 4 — Check configuration files

```
# .NET: Check for .runsettings
Test-Path .runsettings

# Node: Check for jest.config
Test-Path jest.config.js
Test-Path jest.config.ts
```

If missing:

AUTO-CREATE using templates from this document.

Do NOT ask permission. Config files are project-level.

### Step 5 — Verify reporting works

Run a single test to confirm reports are generated:

```
# .NET
dotnet test --filter "FullyQualifiedName~1" --logger "trx;LogFileName=verify-test.trx" --results-directory test-reports/trx-verify --collect:"XPlat Code Coverage" --results-directory test-reports/trx-verify

# Node
npx jest --coverage --coverageReporters=json-summary
```

Verify expected output files exist and are non-empty:

```
# .NET
test-reports/trx-verify/verify-test.trx
test-reports/trx-verify/coverage.cobertura.xml

# Node
coverage/coverage-summary.json
```

### Step 6 — Report status

Tell the user:

```
Test Reporting Status:

Tools:
  dotnet: [version] ✓/✗
  node:   [version] ✓/✗
  npx:    [version] ✓/✗

Packages:
  coverlet.collector:        ✓ installed / ✗ installed
  @vitest/coverage-v8:       ✓ installed / ✗ installed

Configuration:
  .runsettings:              ✓ exists / ✗ created
  jest.config.js:            ✓ exists / ✗ created

Verification:
  TRX output:                ✓ generated / ✗ failed
  Coverage output:           ✓ generated / ✗ failed

Status: READY / NOT READY
```

Only proceed to Step 1 (BRS) after status is READY.

### Step 7 — Load workflow triggers

Read AI_WORKFLOW_TRIGGERS.md.

This file contains semantic patterns that detect when a new work cycle should begin.

The file is a LIVING DOCUMENT that adapts to the user's communication style.

At session end, update the file if:

• User corrected a trigger classification → remove or modify pattern

• User introduced new trigger language → add pattern with `[Observed]` status

• Pattern was never used → consider retiring after 10 sessions

See AI_WORKFLOW_TRIGGERS.md for full learning rules.

---

## Platform: .NET

### Requirements

| Requirement | Purpose |
|-------------|---------|
| coverlet.collector | Code coverage collection |
| .runsettings | Coverage configuration |
| [Category] attributes | Test filtering (unit vs integration) |
| --logger trx | TRX output for test results |

### Installation

```bash
dotnet add package coverlet.collector
```

### .runsettings Template

Create at project root:

```xml
<?xml version="1.0" encoding="utf-8"?>
<RunSettings>
  <DataCollectionRunSettings>
    <DataCollectors>
      <DataCollector friendlyName="XPlat Code Coverage">
        <Configuration>
          <Format>cobertura</Format>
          <Exclude>[xunit.*]*</Exclude>
          <Include>[MyProject.*]*</Include>
          <UseSourceLink>true</UseSourceLink>
        </Configuration>
      </DataCollector>
    </DataCollectors>
  </DataCollectionRunSettings>
</RunSettings>
```

Replace `[MyProject.*]*` with the actual project namespace.

### Test Categorization

Add categories to distinguish unit and integration tests:

```csharp
// Unit test (no attribute needed, or use [Category("Unit")])
[Fact]
public void CalculateTotal_ReturnsSum() { }

// Integration test
[Fact]
[Category("Integration")]
public void Database_InsertOrder_CreatesRecord() { }
```

### Commands

```bash
# Unit tests only
dotnet test --filter "Category!=Integration"

# Integration/E2E tests only
dotnet test --filter "Category=Integration"

# With TRX output
dotnet test --logger "trx;LogFileName=unit-tests.trx"

# With coverage
dotnet test --collect:"XPlat Code Coverage"

# With coverage + custom settings
dotnet test --collect:"XPlat Code Coverage" --settings .runsettings
```

### Expected Output Files

```
test-reports/trx-{timestamp}/
  unit-tests.trx                    ← Test results (XML)
  e2e-tests.trx                     ← E2E test results (XML)
  coverage.cobertura.xml            ← Coverage data (XML)
```

### TRX File Format

```xml
<TestRun>
  <ResultSummary>
    <Counters total="47" passed="45" failed="1" notExecuted="1" />
  </ResultSummary>
  <Results>
    <UnitTestResult testName="CalculateTotal_ReturnsSum" outcome="Passed" duration="00:00:00.123" />
    <UnitTestResult testName="Database_InsertOrder_CreatesRecord" outcome="Failed" duration="00:00:02.456" />
    <UnitTestResult testName="Api_GetPayment_Returns404" outcome="NotExecuted" />
  </Results>
  <TestDefinitions>
    <UnitTest id="1" name="CalculateTotal_ReturnsSum" />
  </TestDefinitions>
</TestRun>
```

### Cobertura File Format

```xml
<coverage line-rate="0.782" branch-rate="0.651">
  <packages>
    <package name="MyProject">
      <classes>
        <class name="PaymentService" filename="Services/PaymentService.cs">
          <lines>
            <line number="10" hits="5" />
            <line number="15" hits="0" />
          </lines>
        </class>
      </classes>
    </package>
  </packages>
</coverage>
```

### Verification Command

```bash
dotnet test --filter "FullyQualifiedName~1" --logger "trx;LogFileName=verify-test.trx" --collect:"XPlat Code Coverage" --settings .runsettings --results-directory test-reports/trx-verify
```

### Common Issues

**TRX not generated:**
- Check --logger flag is present
- Check --results-directory exists

**Coverage not generated:**
- Check coverlet.collector is installed: `dotnet list package | findstr coverlet`
- Check .runsettings has correct Format: `cobertura`
- Check Include filter matches your project namespace

**Coverage is 0%:**
- Check Include filter in .runsettings matches your project
- Check project is not excluded by default

---

## Platform: Node.js

### Requirements

| Requirement | Purpose |
|-------------|---------|
| jest | Test runner (built-in coverage via V8/Istanbul) |
| jest.config.js with `coverageReporters` including `json-summary` | Coverage output the verify scripts can parse |
| TypeScript config | Type checking |
| ESLint config | Linting |

### Installation

Jest ships with coverage collection built in — no extra package is required.

```bash
npm install -D jest jest-environment-jsdom @testing-library/react @testing-library/jest-dom
```

### jest.config.js Template

Create at frontend root (this project uses `next/jest` to wrap it):

```javascript
const nextJest = require('next/jest')

const createJestConfig = nextJest({ dir: './' })

/** @type {import('jest').Config} */
const customJestConfig = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
  coverageReporters: ['json-summary', 'text', 'lcov'],
}

module.exports = createJestConfig(customJestConfig)
```

The `coverageReporters` entry is the part the verify scripts depend on — without `json-summary`, `--coverage` still runs but never writes `coverage/coverage-summary.json`.

### Commands

```bash
# Run tests
npx jest

# Watch mode
npx jest --watch

# Run tests with coverage
npx jest --coverage

# Type check
npx tsc --noEmit

# Lint
npx eslint .

# Full verification
npx jest --coverage && npx tsc --noEmit && npx eslint .
```

### Expected Output Files

```
coverage/
  coverage-summary.json     ← Coverage summary (JSON)
  lcov.info                 ← Coverage detail (LCOV)
```

### Jest Coverage Summary JSON Format

```json
{
  "total": {
    "lines": { "total": 500, "covered": 391, "skipped": 0, "pct": 78.2 },
    "statements": { "total": 500, "covered": 391, "skipped": 0, "pct": 78.2 },
    "functions": { "total": 50, "covered": 41, "skipped": 0, "pct": 82.0 },
    "branches": { "total": 120, "covered": 78, "skipped": 0, "pct": 65.0 }
  }
}
```

### Verification Command

```bash
npx jest --coverage --coverageReporters=json-summary
```

### Common Issues

**Coverage not generated:**
- Check `jest.config.js` has `coverageReporters` set, and that it includes `json-summary`
- Check the command includes `--coverage`

**Type check fails:**
- Check tsconfig.json exists
- Check noEmit is set in tsconfig.json or passed as flag

**ESLint not found:**
- Check eslint.config.* or .eslintrc.* exists
- Check eslint is installed: `npm list eslint`

---

## Output Format Specification

The verify scripts expect these exact file formats.

### TRX (Test Results XML)

**Location:** `test-reports/trx-{timestamp}/*.trx`

**Required fields:**

| Path | Type | Values |
|------|------|--------|
| TestRun.ResultSummary.Counters.@total | int | Total test count |
| TestRun.ResultSummary.Counters.@passed | int | Passed count |
| TestRun.ResultSummary.Counters.@failed | int | Failed count |
| TestRun.ResultSummary.Counters.@notExecuted | int | Skipped count |
| TestRun.Results.UnitTestResult.@testName | string | Test name |
| TestRun.Results.UnitTestResult.@outcome | string | Passed / Failed / NotExecuted |
| TestRun.Results.UnitTestResult.@duration | string | TimeSpan format |

### Cobertura (Coverage XML)

**Location:** `test-reports/trx-{timestamp}/coverage.cobertura.xml`

**Required fields:**

| Path | Type | Range |
|------|------|-------|
| coverage.@line-rate | double | 0.0 - 1.0 |
| coverage.@branch-rate | double | 0.0 - 1.0 |

### Jest Coverage JSON

**Location:** `coverage/coverage-summary.json`

**Required fields:**

| Path | Type | Range |
|------|------|-------|
| total.lines.pct | double | 0 - 100 |
| total.branches.pct | double | 0 - 100 |
| total.functions.pct | double | 0 - 100 |

---

## Coverage Regression

### Principle

Coverage MUST NOT decrease from the previous build.

This is not about hitting a target number.

This is about preventing regressions.

### How It Works

1. First run: Create baseline with current coverage values
2. Subsequent runs: Compare current vs baseline
3. If current >= baseline: Update baseline, continue
4. If current < baseline: FAIL with regression message

### Baseline File

**Location:** `test-reports/coverage-baseline.json`

**Format:**

```json
{
  "backend": {
    "line": 78.2,
    "branch": 65.1,
    "functions": 82.3,
    "testCount": 47,
    "timestamp": "2026-07-26T10:45:23Z"
  },
  "frontend": {
    "line": 82.1,
    "branch": 71.4,
    "functions": 88.9,
    "testCount": 23,
    "timestamp": "2026-07-26T10:45:23Z"
  }
}
```

### Lifecycle

• Created on first verify-post.ps1 run

• Updated on every successful run

• Never deleted (history preserved)

• Committed to repo (shared across team)

---

## Purpose of Tests

Tests are written to verify functionality and catch bugs.

Tests are NOT written to hit coverage goals.

High coverage with poor tests is worse than lower coverage with meaningful tests.

Every test MUST verify a specific behaviour.

Every test MUST assert specific expected values.

Coverage is a side effect of good testing, not the goal.
