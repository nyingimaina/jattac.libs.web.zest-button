# AI Workflow

## Terminology

The words MUST, MUST NOT, SHALL, SHALL NOT, SHOULD and MAY are to be interpreted as defined by RFC 2119.

---

# Objective

Correctness is the highest priority.

Order of priorities:

1. Correctness
2. Preservation of business behaviour
3. Testability
4. Maintainability
5. Readability
6. Performance
7. Code elegance

Never sacrifice a higher priority for a lower one.

---

# Required Workflow

Every task SHALL follow this exact sequence.

Do not skip steps.

Do not reorder steps.

---

# Workflow Trigger Detection

Before ANY workflow step, detect whether a new work cycle is needed.

Read AI_WORKFLOW_TRIGGERS.md at session startup.

## Detection Logic

For EVERY user message that involves code changes:

1. Check message against trigger patterns
2. Classify as: New Work Cycle / Continuation / No Code Change / Ambiguous
3. If New Work Cycle → trigger full workflow (BRS → verify-pre → build → test → verify-post)
4. If Continuation → amend existing BRS if needed, skip BRS creation
5. If No Code Change → answer question, no workflow
6. If Ambiguous → ask user to clarify

## Strong Inference Rule

The LLM MUST infer work cycles from semantics, NOT wait for explicit announcements.

Humans do not say "I am starting a new feature." They say "add user authentication."

The LLM SHALL detect these patterns and trigger workflow automatically.

If the user corrects the classification:

• Update AI_WORKFLOW_TRIGGERS.md

• Remove pattern if user says it's not a trigger

• Add pattern if user introduces new trigger language

## Workflow Interruption

If user pivots mid-implementation:

1. PAUSE current work
2. ASK: "Should I finish [current task] or switch to [new request]?"
3. If new request: mark current BRS as "Paused", create new BRS
4. If continuation: amend current BRS with new criteria

Never silently abandon a BRS mid-implementation.

---

## Step 0 — Session startup verification

Before ANY task, verify the project is ready for work.

Run `./scripts/verify-pre.ps1` from the project root.

If missing platform: the script skips platform-specific phases automatically.

The script checks:

• Git state (not on protected branch)

• Tools available (dotnet/node/npx)

• Dependencies restored

• Configuration files exist

• BRS exists and was approved

If the script reports NOT READY: fix the issues before proceeding.

Only proceed to Step 1 after verification passes.

---

## Step 1 — BRS

Every task MUST have a BRS before implementation begins.

If a BRS exists for this task:

Read it completely.

Verify all acceptance criteria are specific and testable.

Verify the definition of done is clear.

Verify the BRS is approved by the user.

If incomplete or unapproved, STOP.

If a BRS does not exist:

Collaborate with the user to create one.

Follow the template in AI_BRS.md.

The AI SHALL:

• Ask clarifying questions

• Identify gaps in requirements

• Suggest edge cases

• Critique technical decisions

• Recommend patterns

• Challenge assumptions

The BRS MUST be complete and approved before proceeding.

The user MUST explicitly approve the BRS. Do NOT assume approval.

Save the BRS co-located with the code it describes.

Do NOT write code.

Do NOT explore code yet.

---

## Step 2 — Read the code

Before modifying ANY file, you MUST read its complete contents.

You MUST also read every file that calls or is called by modified code.

You MUST NOT modify a file you have not read in this session.

State which files you read and why.

If you cannot determine which files are affected, STOP and ask the user.

---

## Step 3 — Build impact analysis

Identify:

• callers

• callees

• interfaces

• inheritance

• dependency injection

• configuration

• events

• persistence

• serialization

• external APIs

• background jobs

• scheduled jobs

• message queues

• reflection

• caches

• feature flags

• database schema

• SQL

• existing tests

Document all findings.

---

## Step 4 — Uncertainty gate

If you cannot fully trace a call chain, STOP.

If you cannot determine all consumers of a modified method, STOP.

If you are making ANY assumption about code you have not read, STOP.

Report the uncertainty to the user.

Do NOT proceed with incomplete understanding.

---

## Step 5 — Update knowledge

Update ai-knowledge.md with any newly discovered architectural knowledge.

This MUST happen BEFORE implementation.

---

## Step 6 — Determine blast radius

Every potentially affected behaviour MUST be identified.

For every affected behaviour:

Does a test exist?

YES

Continue.

NO

Write the test FIRST.

The purpose of these tests is to preserve existing business behaviour before modifications begin.

---

## Step 7 — Decomposition gate

If the task requires changes across more than 3-4 files, STOP.

Decompose into smaller units.

Present the decomposition to the user for approval before proceeding.

Each unit should be implemented and tested independently.

---

## Step 8 — Pattern discovery

Before writing any new code, find 2-3 existing examples of the same pattern in the codebase.

Write your code to match those examples exactly.

If you cannot find existing examples, ask the user how to proceed.

---

## Step 9 — Implementation

Only now may implementation begin.

During implementation, the following rules apply:

### BRS compliance

Every change MUST trace back to a specific requirement in the BRS.

If you are making a change that is NOT in the BRS, STOP.

Ask the user whether the BRS needs updating.

### Minimal change

Do NOT modify any line not directly required by the BRS.

Do NOT fix typos in comments.

Do NOT rename variables for clarity.

Do NOT reorder methods.

Do NOT reformat code.

Do NOT add missing validation.

Do NOT improve error messages.

Do NOT add comments unless explicitly requested.

Do NOT add logging unless explicitly requested.

Do NOT add error handling unless explicitly requested.

Do NOT add TODO comments.

NONE of these unless explicitly requested.

### Diff gate

If your production code diff exceeds ~50 lines for a single behaviour change, STOP.

You are likely touching code you should not be touching.

Get user approval before proceeding.

---

## Step 10 — Change manifest

Before proceeding to testing, produce a manifest.

For every file modified, state in one sentence WHY this specific change is necessary for the BRS.

If any entry cannot be justified by the BRS, revert that file.

Format:

```
file/path.ts — [BRS requirement this satisfies]
file/other.ts — [BRS requirement this satisfies]
```

---

## Step 11 — Run tests

Run tests in this order:

New tests

↓

Blast radius tests

↓

Integration tests

↓

Entire test suite

↓

Build

Report the exact test output.

State the number of tests passed, failed, and skipped.

State the command used.

Do NOT claim tests pass without showing output.

If ANY test fails, the task is NOT complete.

Do NOT skip tests.

Do NOT disable tests.

Do NOT mark tests as ignored.

---

## Step 12 — Self review

Perform the review defined in AI_CODE_REVIEW.md.

Every item MUST be evaluated as PASS or FAIL with evidence.

If ANY item is FAIL, the task is NOT complete.

Additionally, verify BRS compliance:

• Every acceptance criterion in the BRS is satisfied by a test

• Every change traces to a BRS requirement

• No changes exist outside the BRS scope

---

## Step 13 — Update knowledge

Update ai-knowledge.md again if implementation revealed new information.

---

## Step 14 — Update decision log

Record in decision-log.md:

• What was requested

• What was changed

• What alternatives were considered

• Why this approach was chosen

---

## Step 15 — Report completion

Report:

• BRS compliance summary (which acceptance criteria are satisfied)

• Change manifest (from Step 10)

• Test results (from Step 11)

• Self review results (from Step 12)

• Known risks

• Remaining unknowns

• Confidence level
