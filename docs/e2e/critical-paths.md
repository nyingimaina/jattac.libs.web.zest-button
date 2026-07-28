# Critical Paths

This document defines the critical business paths that MUST be covered by e2E tests.

---

## How to Identify Critical Paths

A path is critical if:

• It handles money or payments

• It manages user authentication or authorization

• It writes to the database in ways that affect business data

• It integrates with external systems

• If broken, it causes immediate user-facing impact

---

## Paths

### Authentication

- [ ] Login with valid credentials → 200 + token

- [ ] Login with invalid credentials → 401

- [ ] Token refresh → 200 + new token

- [ ] Logout → 200 + token invalidated

### Payment

- [ ] Create payment → 201 + payment record

- [ ] Confirm payment → 200 + status updated

- [ ] Handle payment failure → 200 + status updated

- [ ] Process refund → 200 + refund record

### Order

- [ ] Create order → 201 + order record

- [ ] Pay order → 200 + order status updated

- [ ] Ship order → 200 + order status updated

- [ ] Complete order → 200 + order status updated

- [ ] Cancel order → 200 + order status updated

### Data

- [ ] Import data → 200 + records created

- [ ] Export data → 200 + file returned

---

## Adding New Paths

When adding a new critical path:

1. Add the path description above

2. List each scenario with expected outcome

3. Write e2e tests covering each scenario

4. Mark scenarios as tested: `- [x]`
