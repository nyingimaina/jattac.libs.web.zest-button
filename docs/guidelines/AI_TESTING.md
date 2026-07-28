# Testing Policy

This repository uses strict Test Driven Development.

No exceptions.

---

# Fundamental Rule

Production code MUST NOT be written before a failing test exists.

---

# Required Cycle

Write failing test

↓

Observe failure

↓

Write minimal production code

↓

Observe success

↓

Refactor

---

# Bug Fixes

Every bug MUST begin with a regression test.

Never fix a bug first.

Incorrect:

Fix bug

↓

Write test

Correct:

Write failing regression test

↓

Observe failure

↓

Implement fix

↓

Observe pass

---

# Existing Behaviour

Before modifying existing code:

Identify all affected behaviour.

If behaviour is not covered by tests:

Write those tests first.

The objective is to freeze current business behaviour.

Only then modify production code.

---

# Missing Tests

Missing tests are technical debt.

If encountered during implementation they SHOULD be added before production changes.

---

# Green Tests

Code SHALL NEVER be committed while tests are failing unless explicitly instructed.

---

# Refactoring

Refactoring SHALL NOT alter externally observable behaviour.

Tests SHALL remain green before, during and after refactoring.

---

# Coverage

Coverage percentage is NOT success.

Correct behavioural coverage is success.

Prefer meaningful behavioural tests over line coverage.

---

# Coverage Regression

Coverage MUST NOT decrease from the previous build.

If current coverage is lower than the baseline, the build FAILS.

This is not about hitting a target number.

This is about preventing regressions.

The baseline is tracked in test-reports/coverage-baseline.json.

See AI_TEST_CONFIGURATION.md for baseline management details.

---

# Purpose of Tests

Tests are written to verify functionality and catch bugs.

Tests are NOT written to hit coverage goals.

High coverage with poor tests is worse than lower coverage with meaningful tests.

Every test MUST verify a specific behaviour.

Every test MUST assert specific expected values.

Coverage is a side effect of good testing, not the goal.

---

# Test Reporting Configuration

Every project MUST have test reporting configured.

The LLM MUST verify configuration at the start of every session.

If reporting is not configured, the FIRST task is to configure it.

See AI_TEST_CONFIGURATION.md for platform-specific instructions.

---

# Test Output Verification

When tests are run, you MUST capture and report the actual output.

State:

• Command run

• Tests passed

• Tests failed

• Tests skipped

Do NOT summarise.

Do NOT paraphrase.

Show the numbers.

Example:

```
$ dotnet test

Passed:  47
Failed:  0
Skipped: 2

Total:   49
```

Do NOT claim tests pass without showing output.

---

# Failure Handling

If ANY test fails, the task is NOT complete.

Fix the failure before proceeding.

Do NOT skip tests.

Do NOT disable tests.

Do NOT mark tests as ignored.

Do NOT modify tests to make them pass.

Do NOT change test expectations to match broken behaviour.

---

# Test Isolation

New tests MUST NOT depend on test execution order.

New tests MUST NOT depend on external state (databases, file systems, network) unless testing integration behaviour explicitly.

New tests MUST clean up after themselves.

New tests MUST NOT modify shared state that could affect other tests.

---

# Assertion Specificity

Tests MUST assert specific expected values, not just "does not throw."

Tests MUST verify behaviour, not implementation details.

Tests SHOULD use Arrange-Act-Assert structure.

Tests SHOULD have descriptive names that explain the scenario.

---

# Test Categories

The following test categories exist and MUST be executed in order:

1. Unit tests

2. Service tests

3. API integration tests

4. API contract tests

5. UI end-to-end tests

All categories MUST pass before a task is considered complete.

If a test category does not exist in the project, skip it but document its absence.

---

# Mock and Stub Rules

Mocks and stubs MUST NOT be used to hide failures.

Mocks and stubs MUST represent real behaviour accurately.

If a mock is causing confusion, write an integration test instead.

---

# Regression Tests

Every bug fix MUST include a regression test.

Regression tests MUST be named to describe the bug they prevent.

Regression tests MUST remain in the test suite permanently.
