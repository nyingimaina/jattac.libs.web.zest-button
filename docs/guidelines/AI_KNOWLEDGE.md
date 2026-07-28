# AI Knowledge Graph

Purpose:

Maintain a continuously evolving architectural memory of this repository.

This document is not documentation for humans.

It is persistent memory for future AI agents.

---

Every completed task MUST update this file if new knowledge is discovered.

This MUST happen BEFORE implementation and AGAIN after implementation.

---

# Format

Every component entry MUST follow this format:

```
## [ComponentName]

### Purpose

[One sentence describing what this component does]

### Location

[File path]

### Callers

[List of components that call this component]

### Callees

[List of components that this component calls]

### Dependencies

[List of external dependencies]

### Publishes

[List of events published]

### Consumes

[List of events consumed]

### Configuration

[Configuration sources and settings]

### Database

[Tables, queries, connections]

### Known Invariants

[Business rules that MUST NOT change]

### Known Pitfalls

[Things that are easy to break]

### Thread Safety

[Concurrency considerations]

### Transaction Boundaries

[Transaction scope and isolation]

### Security Assumptions

[Authentication, authorization assumptions]

### Performance Characteristics

[Known performance traits]

### Test Coverage

[What is tested, what is not]
```

---

# Entry Rules

Every component discovered during implementation MUST be added.

Every component modified during implementation MUST be updated.

Never remove information unless proven obsolete.

Prefer appending.

Repository knowledge compounds over time.

---

# Example

## PaymentService

### Purpose

Creates payment records.

### Location

src/Services/PaymentService.cs

### Callers

OrderController

InvoiceService

### Callees

PaymentRepository

EventBus

EmailService

### Dependencies

Newtonsoft.Json

Stripe SDK

### Publishes

PaymentCreated

PaymentFailed

### Consumes

OrderPlaced

RefundRequested

### Configuration

PaymentSettings:MaxRetries (appsettings.json)

PaymentSettings:StripeKey (secrets)

### Database

Payments table

PaymentAuditLog table

### Known Invariants

Payment amount is immutable after settlement.

Payment status transitions are one-way: Pending → Settled or Pending → Failed.

### Known Pitfall

Registration occurs through reflection. Do not remove the Register method.

### Thread Safety

Payment processing is serialized per payment ID.

### Transaction Boundaries

Payment creation and event publishing are in separate transactions.

### Security Assumptions

Stripe key must never appear in logs.

### Performance Characteristics

Payment creation is synchronous. Event handlers are asynchronous.

### Test Coverage

Unit tests for PaymentService.
Integration tests for PaymentRepository.
No tests for EmailService (mocked).

---

# Cross-References

When a component is modified, check all components that reference it.

Update their entries if the modification affects their behaviour.

---

# Maintenance

Never delete entries unless the component has been removed from the codebase.

Never delete known invariants unless explicitly instructed.

Never delete known pitfalls unless they have been resolved.

When in doubt, append rather than modify.
