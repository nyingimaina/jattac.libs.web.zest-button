# AI BRS (Business Requirements Specification)

## Terminology

The words MUST, MUST NOT, SHALL, SHALL NOT, SHOULD and MAY are to be interpreted as defined by RFC 2119.

---

# Purpose

Every task MUST have a BRS before implementation begins.

The BRS defines:

• What needs to be done

• What "done" looks like

• What is explicitly out of scope

The BRS is a collaborative document. The AI SHALL ask questions, identify gaps, suggest edge cases, and challenge assumptions during creation.

---

# Task-Type Variants

The BRS template is the same for all task types. The content varies.

| Task Type | Problem Statement Focus | Technical Design Focus |
|-----------|------------------------|----------------------|
| Feature | User story + business value | API, DB, services, UI, events |
| Bug fix | Reproduction steps + expected vs actual | Root cause + fix approach |
| Refactor | Current state + desired state | Behaviour preservation strategy |

---

# Creation Process

```
User request received
        ↓
Does a BRS exist for this task?
        ↓
YES → Read it. Verify completeness.
        ↓
NO → Create collaboratively with user.
        ↓
AI SHALL:
  • Ask clarifying questions
  • Identify gaps in requirements
  • Suggest edge cases
  • Critique technical decisions
  • Recommend patterns
  • Challenge assumptions
        ↓
BRS complete?
        ↓
YES → Save BRS. Proceed to workflow.
        ↓
NO → STOP. Ask user to complete missing sections.
```

---

# Approval Gate

The BRS MUST be explicitly approved by the user before implementation begins.

Approval means: the user confirms the BRS is complete and accurate.

The AI SHALL NOT proceed without approval.

The AI SHALL NOT assume approval. The user MUST explicitly say "approved" or equivalent.

If the user says nothing after the BRS is presented, STOP and wait.

---

# BRS Location

BRS is co-located with the code it describes.

C# backend:

```
src/Features/<FeatureName>/BRS.md
```

Next.js frontend:

```
src/features/<featureName>/BRS.md
```

Each layer has its own BRS. They are separate documents.

If a task spans both layers, both layers MUST have their own BRS.

---

# BRS Template

```markdown
# BRS — [Task Title]

## Metadata

| Field | Value |
|-------|-------|
| Status | Draft / Approved / Implementing / Complete |
| Task Type | Feature / Bug Fix / Refactor / Other |
| Author | [Name] |
| Created | [Date] |
| Last Updated | [Date] |

---

## Problem Statement

### For Features

As a [user type], I want [action] so that [benefit].

### For Bug Fixes

**Reproduction Steps:**

1. [Step 1]
2. [Step 2]
3. [Step 3]

**Expected Behaviour:** [What should happen]

**Actual Behaviour:** [What actually happens]

**Root Cause:** [If known]

### For Refactors

**Current State:** [What exists now]

**Desired State:** [What it should look like]

**Why:** [Motivation for the refactor]

---

## Business Value / Impact

[Why this matters. What problem does it solve? What risk does it mitigate?]

---

## Acceptance Criteria

Each criterion MUST be specific and testable.

### [Criterion 1: Short descriptive name]

- **Given** [precondition / context]
- **When** [action / trigger]
- **Then** [expected result]
- **And** [additional expected result, if any]

### [Criterion 2: Short descriptive name]

- **Given** [precondition]
- **When** [action]
- **Then** [expected result]

[... continue for ALL acceptance criteria]

---

## Out of Scope

Explicitly list what this task does NOT include.

- [What this task does NOT do]
- [What this task does NOT change]
- [What this task does NOT fix]

---

## Technical Design

### API Endpoints (if applicable)

| Method | Path | Description | Request Body | Response Body | Status Codes |
|--------|------|-------------|--------------|---------------|--------------|
| POST | /api/payments | Create payment | `{amount, currency}` | `{id, amount, status}` | 201, 400, 500 |

### Database Changes (if applicable)

| Table | Change Type | Column | Type | Notes |
|-------|-------------|--------|------|-------|
| payments | CREATE | id | BIGINT | PK |
| payments | CREATE | amount | DECIMAL(10,2) | NOT NULL |

### Service Methods (if applicable)

| Class | Method | Signature | Behaviour |
|-------|--------|-----------|-----------|
| PaymentService | CreatePayment | `async Task<Payment> CreatePayment(...)` | Creates record, publishes event |

### UI Components (if applicable)

| Component | Purpose | Behaviour |
|-----------|---------|-----------|
| PaymentForm | Create payment | Submits, validates, redirects |

### Events (if applicable)

| Event | Publisher | Consumers | Payload |
|-------|-----------|-----------|---------|
| PaymentCreated | PaymentService | ReceiptService | `{paymentId, amount}` |

---

## Edge Cases

### [Edge Case 1]

**Scenario:** [Description]

**Expected:** [Behaviour]

### [Edge Case 2]

**Scenario:** [Description]

**Expected:** [Behaviour]

---

## Dependencies

### Internal

- [What must exist before this works]

### External

- [What external systems are required]

---

## Risks and Open Questions

### Risks

- [What could go wrong]

### Open Questions

- [What needs clarification]

---

## Regression Prevention

### For Bug Fixes

**Regression Test:** [Name of test that prevents this bug from recurring]

**Test Location:** [File path]

### For Features

**New Tests Required:**

- [Test 1: what it verifies]
- [Test 2: what it verifies]

### For Refactors

**Behaviour Preservation:** [How we verify behaviour is unchanged]

---

## Definition of Done

Every item MUST be checked before this task is considered complete.

- [ ] BRS approved by user
- [ ] All acceptance criteria pass
- [ ] All tests pass (new + existing)
- [ ] No regressions
- [ ] No unsolicited changes outside BRS scope
- [ ] Code matches existing patterns
- [ ] Change manifest produced
- [ ] Self review passed with all PASS items
```

---

# BRS Completeness Checklist

Before presenting the BRS to the user for approval, verify:

✓ Metadata is filled in

✓ Problem statement is clear and complete

✓ Business value is articulated

✓ Every acceptance criterion uses Given-When-Then format

✓ Out of scope is explicit

✓ Technical design covers all affected layers

✓ Edge cases are identified

✓ Dependencies are listed

✓ Risks and open questions are documented

✓ Regression prevention strategy is defined

✓ Definition of done is complete

If any item is missing, the BRS is NOT complete.

---

# BRS Review Process

The AI SHALL review the BRS for:

### Completeness

Are all sections filled in?

Are there gaps in the requirements?

Are there missing edge cases?

### Testability

Can every acceptance criterion be verified by a test?

Are the expected results specific enough?

Are there any vague terms ("should", "fast", "user-friendly")?

### Consistency

Do the acceptance criteria contradict each other?

Does the technical design support all acceptance criteria?

Are there dependencies that create circular requirements?

### Feasibility

Is the technical design achievable?

Are there technical risks that haven't been addressed?

Is the scope reasonable for the task?

### Safety

Does the task introduce security risks?

Does the task affect data integrity?

Does the task break existing behaviour?

---

# BRS Anti-Patterns

The following are NOT acceptable in a BRS:

• Vague acceptance criteria ("should work correctly")

• Missing edge cases for critical paths

• Acceptance criteria that cannot be tested

• Technical design that contradicts acceptance criteria

• Out of scope that is too broad (prevents the task from being done)

• Out of scope that is too narrow (allows scope creep)

• Missing regression prevention for bug fixes

• Definition of done that is not verifiable

---

# Updating the BRS

The BRS MAY be updated during implementation if:

• New edge cases are discovered

• Technical design needs to change

• Acceptance criteria need refinement

When updating:

1. Update the "Last Updated" field

2. Document what changed and why

3. Re-present to the user for approval

4. Only proceed after re-approval

---

# BRS and the Workflow

The BRS is Step 1 of the AI workflow.

Every subsequent step traces back to the BRS:

• Impact analysis (Step 3) identifies what the BRS requires

• Blast radius (Step 6) identifies what the BRS might affect

• Implementation (Step 10) satisfies the BRS acceptance criteria

• Tests (Step 12) verify the BRS acceptance criteria

• Self review (Step 13) checks BRS compliance

• Completion report (Step 16) maps changes back to the BRS

If any step reveals the BRS is incomplete, STOP and update the BRS.
