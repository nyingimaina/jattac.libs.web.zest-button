# AI Workflow Triggers

## Terminology

The words MUST, MUST NOT, SHALL, SHALL NOT, SHOULD and MAY are to be interpreted as defined by RFC 2119.

---

# Purpose

This file is a LIVING DOCUMENT.

It defines semantic patterns that trigger a new work cycle (BRS → verify-pre → build → test → verify-post).

The LLM MUST read this file at session startup.

The LLM MUST learn from user interactions and update this file.

---

# How This File Works

## Seed Patterns

The patterns below are starting points.

They are NOT permanent.

## Learning Rules

### Removing Patterns

If the user indicates a pattern is NOT a trigger:

1. REMOVE it from the appropriate list
2. ADD it to the "Retired Patterns" section with reason
3. DO NOT re-add it in future sessions

Examples of user indication:

- "that's not a new task, just continue"
- "I don't need a BRS for small changes"
- "stop asking, just do it"

### Adding Patterns

If the LLM observes a new trigger pattern:

1. ADD it to the appropriate list
2. Mark it as `[Observed]` with date
3. After 3 consecutive uses, promote to `[Established]`

### Retiring Patterns

If a pattern is never used after 10 sessions:

1. MOVE to "Retired Patterns" with date
2. DO NOT delete — history matters

---

# Trigger Classification

## New Work Cycle — Strong Inference

**Action:** Trigger FULL workflow (BRS → verify-pre → build → test → verify-post)

### Feature Creation

| Pattern | Status | Added |
|---------|--------|-------|
| "add..." | [Established] | Seed |
| "create..." | [Established] | Seed |
| "implement..." | [Established] | Seed |
| "build..." | [Established] | Seed |
| "new feature..." | [Established] | Seed |
| "new page..." | [Established] | Seed |
| "new component..." | [Established] | Seed |
| "new endpoint..." | [Established] | Seed |
| "new table..." | [Established] | Seed |
| "new migration..." | [Established] | Seed |

### Bug Fix

| Pattern | Status | Added |
|---------|--------|-------|
| "fix..." | [Established] | Seed |
| "bug..." | [Established] | Seed |
| "broken..." | [Established] | Seed |
| "error..." | [Established] | Seed |
| "crash..." | [Established] | Seed |
| "failing..." | [Established] | Seed |
| "doesn't work..." | [Established] | Seed |
| "not working..." | [Established] | Seed |
| "regression..." | [Established] | Seed |
| "the [thing] is wrong..." | [Established] | Seed |

### Refactor

| Pattern | Status | Added |
|---------|--------|-------|
| "refactor..." | [Established] | Seed |
| "restructure..." | [Established] | Seed |
| "rewrite..." | [Established] | Seed |
| "reorganize..." | [Established] | Seed |
| "clean up..." | [Established] | Seed |
| "simplify..." | [Established] | Seed |
| "extract..." | [Established] | Seed |
| "move..." (code movement) | [Established] | Seed |

---

## Continuation — Same Work

**Action:** DO NOT trigger new BRS. Amend existing if needed.

### Same Context Continuation

| Pattern | Status | Added |
|---------|--------|-------|
| "also..." | [Established] | Seed |
| "and..." | [Established] | Seed |
| "plus..." | [Established] | Seed |
| "while you're at it..." | [Established] | Seed |
| "can you also..." | [Established] | Seed |
| "don't forget..." | [Established] | Seed |
| "one more thing..." | [Established] | Seed |

### Test Continuation

| Pattern | Status | Added |
|---------|--------|-------|
| "the test for..." | [Established] | Seed |
| "add a test for..." | [Established] | Seed |
| "test coverage for..." | [Established] | Seed |

---

## No Code Change

**Action:** Skip workflow entirely. Answer question.

| Pattern | Status | Added |
|---------|--------|-------|
| "what does..." | [Established] | Seed |
| "explain..." | [Established] | Seed |
| "how does..." | [Established] | Seed |
| "can you read..." | [Established] | Seed |
| "show me..." | [Established] | Seed |
| "question about..." | [Established] | Seed |
| "why..." | [Established] | Seed |
| "when..." | [Established] | Seed |
| "where..." | [Established] | Seed |

---

## Ambiguous — Ask for Clarification

**Action:** ASK user to clarify before proceeding.

| Pattern | Status | Added |
|---------|--------|-------|
| "I need help with..." | [Established] | Seed |
| "the [thing]..." | [Established] | Seed |
| "can you..." | [Established] | Seed |
| "would you..." | [Established] | Seed |
| "could you..." | [Established] | Seed |

### Clarification Questions

When ambiguous, ask:

- "Is this a new feature, bug fix, or question?"
- "Should I implement this or just explain it?"
- "Do you want me to create a BRS for this?"

---

# Retired Patterns

| Pattern | Reason | Retired Date |
|---------|--------|--------------|
| (none yet) | — | — |

---

# Learned Patterns

This section is populated by the LLM during sessions.

## User-Specific Patterns

| Pattern | Classification | Evidence | Confidence |
|---------|---------------|----------|------------|
| (none yet) | — | — | — |

---

# Metrics

Track trigger accuracy:

| Metric | Value |
|--------|-------|
| Total triggers fired | 0 |
| Correct (user confirmed) | 0 |
| Incorrect (user corrected) | 0 |
| Accuracy | — |
| Patterns added | 0 |
| Patterns retired | 0 |
| Last updated | (session date) |

---

# Usage

1. LLM reads this file at session start
2. When user sends a message, LLM checks patterns
3. If match found → trigger appropriate workflow
4. If user corrects → update this file
5. If new pattern observed → add with `[Observed]` status
6. After implementation → update metrics
