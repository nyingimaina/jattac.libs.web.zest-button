# AI_GIT_WORKFLOW.md

# Purpose

This document defines the mandatory Git workflow for this repository.

Its objectives are:

* Protect repository history.
* Prevent accidental work on protected branches.
* Keep commits small and reviewable.
* Ensure every change is reproducible.
* Ensure repository protections remain enabled.

The terms **MUST**, **MUST NOT**, **SHALL**, **SHALL NOT**, **SHOULD**, and **MAY** are interpreted according to RFC 2119.

---

# Workflow

Every implementation SHALL follow this exact sequence.

```
Understand Request
        ↓
Analyse Existing Code
        ↓
Determine Blast Radius
        ↓
Write / Extend Tests
        ↓
Verify Tests Fail (when applicable)
        ↓
Implement
        ↓
Run All Required Tests
        ↓
Build
        ↓
Update ai-knowledge.md
        ↓
Update decision-log.md
        ↓
Self Review
        ↓
Complete
```

Do not skip steps.

Do not reorder steps.

---

# Repository Safety

Repository history is a critical project asset.

Protecting repository history SHALL always take priority over implementation speed.

AI agents SHALL NEVER weaken repository protections.

---

# Protected Branches

The following branches SHALL be considered protected unless explicitly configured otherwise.

* master
* main
* trunk
* production
* release

Protected branches SHALL NEVER be used for implementation work.

---

# Absolute Prohibitions

AI agents SHALL NEVER:

* Commit directly to a protected branch.
* Push directly to a protected branch.
* Merge directly into a protected branch.
* Force push a protected branch.
* Delete a protected branch.
* Rewrite protected branch history.
* Disable Git hooks.
* Remove repository protections.
* Recommend `--no-verify`.
* Bypass repository safety mechanisms without explicit user instruction.

---

# Working Branches

All implementation SHALL occur on a working branch.

Recommended names:

```
feature/<description>

bugfix/<description>

refactor/<description>

hotfix/<description>

experiment/<description>
```

Examples:

```
feature/payment-import

bugfix/invoice-rounding

refactor/order-service
```

---

# Beginning Work

Before modifying code the AI SHALL determine:

Current branch

↓

Protected?

If YES:

Create a working branch.

Switch to it.

Only then begin implementation.

---

# Pull Requests

Protected branches SHALL receive code through Pull Requests.

AI agents SHALL NOT merge Pull Requests.

AI agents SHALL prepare changes for review.

---

# Repository Bootstrap

Before implementation the AI SHALL verify that repository safety exists.

Required checks:

✓ `.githooks/` exists

✓ `core.hooksPath` points to `.githooks`

✓ Required hooks exist

✓ Bootstrap script exists

✓ Branch protections documented

If any item is missing:

Bootstrap the repository.

---

# Version Controlled Hooks

Repository hooks SHALL be version controlled.

Do NOT use:

```
.git/hooks
```

Instead use:

```
.githooks/

    pre-commit

    pre-push

    pre-merge-commit

    commit-msg
```

Repository setup SHALL execute:

```
git config core.hooksPath .githooks
```

---

# Bootstrap Script

If no bootstrap exists the AI SHALL create:

```
scripts/bootstrap.sh
```

The bootstrap SHALL:

Configure Git hooks

↓

Configure core.hooksPath

↓

Verify required tooling

↓

Restore dependencies

↓

Verify build

↓

Verify tests

↓

Print success summary

The bootstrap MUST be idempotent.

Running it multiple times SHALL NOT damage an existing repository.

---

# Hook Responsibilities

## pre-commit

Responsible for:

* formatting
* linting
* fast validation
* accidental generated files
* obvious mistakes

Must remain fast.

---

## commit-msg

Responsible for:

* commit message validation
* optional Conventional Commit enforcement

---

## pre-push

Responsible for:

Rejecting pushes to:

```
master

main

trunk

production

release
```

unless the administrator override is explicitly enabled.

The hook SHOULD also verify:

* build passes
* tests pass
* branch naming
* clean working tree

---

## pre-merge-commit

Responsible for validating merges before completion.

---

# Administrator Override

Repository protections intentionally include a human override.

The override exists for:

* emergency production fixes
* repository maintenance
* administrator initiated pushes

The override SHALL NOT activate automatically.

The override SHALL require explicit human intent.

AI agents SHALL NEVER invoke the override unless explicitly instructed by the user.

---

# Standard Override Command

The repository SHALL provide:

```
git push-master
```

Bootstrap SHALL configure:

```
git config alias.push-master \
'!ALLOW_PROTECTED_BRANCH_PUSH=1 git push'
```

This alias is the ONLY approved local override mechanism.

AI agents SHALL NOT invent alternative bypass methods.

AI agents SHALL NOT recommend:

```
git push --no-verify
```

or disabling hooks.

---

# pre-push Override Behaviour

The repository pre-push hook SHALL implement the following logic.

```
Current Branch

↓

Protected?

↓

NO

↓

Allow Push

---------------------

YES

↓

ALLOW_PROTECTED_BRANCH_PUSH == 1 ?

↓

YES

↓

Allow Push

↓

Display Warning

---------------------

NO

↓

Reject Push
```

Example warning:

```
====================================

Protected Branch Override Enabled

You are intentionally pushing directly to a protected branch.

Proceeding because administrator override was explicitly requested.

====================================
```

---

# Existing Hooks

If hooks already exist:

Inspect them.

Preserve repository-specific behaviour.

Extend them if necessary.

Never overwrite customized hooks without explicit instruction.

---

# Existing Bootstrap

If the repository already contains:

```
bootstrap.sh

setup.sh

setup-repository.sh

install.sh
```

Reuse it.

Do not create competing bootstrap mechanisms.

---

# CI

Git hooks are convenience.

CI is enforcement.

If CI does not exist the AI SHOULD recommend creating it.

CI SHOULD verify:

* Build
* Unit Tests
* Service Tests
* API Integration Tests
* API Contract Tests
* UI End-to-End Tests
* Static Analysis
* Formatting

---

# E2E Merge Gate

E2E tests are expensive. They are NOT run on every commit.

E2E tests SHALL run before merge to master.

This applies to:

* Local merges to master

* Pull Requests targeting master

---

## Local Merge Workflow

Before merging to master, the developer (or AI agent) SHALL:

1. Ensure the API server is running

2. Run e2e tests: `dotnet test --filter Category=E2E`

3. Verify all e2e tests pass

4. Create marker: `touch .e2e-passed`

5. Complete the merge

6. Push to remote

7. Delete marker: `rm .e2e-passed`

---

## CI Workflow

If CI exists, e2e tests SHALL be a required check for Pull Requests targeting master.

---

## Enforcement

The pre-push hook rejects pushes to master if `.e2e-passed` does not exist —
but only once the project actually has an E2E suite (a non-empty `e2e/` or
`e2e-tests/` directory). Until then, the gate does not apply.

Where the gate applies, it is a hard block. No override exists for the e2e requirement.

AI agents SHALL NOT bypass this mechanism.

AI agents SHALL NOT create the marker without running tests.

AI agents SHALL NOT recommend skipping e2e tests.

---

# Atomic Changes

Each branch SHOULD represent one logical change.

Never combine:

* features
* bug fixes
* formatting
* refactoring
* dependency upgrades

unless explicitly instructed.

---

# Commit Discipline

Commits SHOULD be:

* small
* reviewable
* cohesive
* reversible

Avoid repository-wide formatting changes.

Avoid unrelated edits.

Avoid opportunistic cleanup.

---

# Repository Validation Checklist

Before considering work complete verify:

✓ Working branch used

✓ Protected branches untouched

✓ Hooks installed

✓ Bootstrap exists

✓ Build succeeds

✓ All required tests pass

✓ No unrelated files modified

✓ ai-knowledge.md updated

✓ decision-log.md updated

✓ Repository protections preserved

✓ E2E critical path tests pass

✓ .e2e-passed marker exists (before push to master)

Only then is implementation considered complete.
