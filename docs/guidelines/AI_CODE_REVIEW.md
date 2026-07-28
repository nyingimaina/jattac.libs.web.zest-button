# AI Code Review

Every completed task SHALL perform a self review.

No exceptions.

---

# Review Checklist

Every item MUST be evaluated as PASS or FAIL with evidence.

If ANY item is FAIL, the task is NOT complete.

---

## Correctness

Does the change do what was requested?

Evidence: specific trace from user request to code change.

FAIL if: any change cannot be traced to a specific requirement.

---

## Blast Radius

Were all affected behaviours identified?

Evidence: list of behaviours checked.

FAIL if: any affected behaviour was not identified.

---

## Test Coverage

Does every change have a corresponding test?

Evidence: test names and locations.

FAIL if: any production change lacks a corresponding test.

---

## No Additions

Were any unnecessary additions made?

Review the diff for:

• Comments not requested

• Logging not requested

• Error handling not requested

• Null checks not requested

• TODO comments

• Defensive code not requested

Evidence: diff review.

FAIL if: any addition cannot be traced to a specific requirement.

---

## No Modifications

Were any unrelated lines modified?

Review the diff for:

• Formatting changes in unrelated code

• Renaming of symbols

• Reordering of methods or imports

• Changes to code not required by the task

Evidence: diff review.

FAIL if: any unrelated line was modified.

---

## Pattern Matching

Does the code match existing patterns?

Evidence: examples of existing patterns cited.

FAIL if: code introduces a new pattern when an existing one exists.

---

## Build

Does the build pass?

Evidence: build output.

FAIL if: build fails.

---

## Tests

Do all tests pass?

Evidence: test output with counts.

FAIL if: any test fails.

---

## Knowledge

Was ai-knowledge.md updated?

Evidence: diff of knowledge file.

FAIL if: new architectural knowledge was discovered but not recorded.

---

## Decision Log

Was decision-log.md updated?

Evidence: diff of decision log.

FAIL if: a decision was made but not recorded.

---

## Change Manifest

Was a change manifest produced?

Evidence: manifest text.

FAIL if: changes were made without justification.

---

## Rollback

Can every change be reverted independently?

Evidence: isolation assessment.

FAIL if: changes are interdependent in ways that prevent safe rollback.

---

# Output Format

Report the review as:

```
Self Review Results

[PASS/FAIL] Correctness — [evidence]
[PASS/FAIL] Blast radius — [evidence]
[PASS/FAIL] Test coverage — [evidence]
[PASS/FAIL] No additions — [evidence]
[PASS/FAIL] No modifications — [evidence]
[PASS/FAIL] Pattern matching — [evidence]
[PASS/FAIL] Build — [evidence]
[PASS/FAIL] Tests — [evidence]
[PASS/FAIL] Knowledge — [evidence]
[PASS/FAIL] Decision log — [evidence]
[PASS/FAIL] Change manifest — [evidence]
[PASS/FAIL] Rollback — [evidence]

Known Risks: [list]
Remaining Unknowns: [list]
Confidence: [low/medium/high]
```

---

# Failure Handling

If ANY item is FAIL, the task is NOT complete.

Address the failure before reporting completion.

Do NOT report completion with FAIL items.

Do NOT downgrade a FAIL to a PASS.

Do NOT skip items you cannot evaluate.
