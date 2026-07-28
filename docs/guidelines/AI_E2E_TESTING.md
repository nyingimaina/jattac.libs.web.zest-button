# E2E Testing Policy

## Terminology

The words MUST, MUST NOT, SHALL, SHALL NOT, SHOULD and MAY are to be interpreted as defined by RFC 2119.

---

## Purpose

E2E tests verify critical business paths through the full stack:

HTTP request → API → service → database → response.

They are expensive. They are not run on every commit.

They are a merge gate: they MUST pass before code enters master.

---

## Critical Path Identification

Each project MUST define its critical paths in:

```
docs/e2e/critical-paths.md
```

A critical path is:

• A business flow that, if broken, causes user-facing impact

• A data integrity path where incorrect writes are dangerous

• An integration point with external systems

Examples:

• User authentication (login, refresh, logout)

• Payment processing (create, confirm, fail, refund)

• Order lifecycle (create, pay, ship, complete)

• Data import/export

• Any path that writes to the database in ways that affect business data

---

## Configuration

Via environment variables:

• `E2E_API_BASE_URL` — the running API (e.g., `https://localhost:5001`)

• `E2E_DB_CONNECTION` — database connection string for setup/teardown

• `E2E_DB_TYPE` — database type (MariaDB, PostgreSQL, SQL Server)

Tests MUST NOT hardcode URLs or connection strings.

Tests MUST fail fast if required environment variables are missing.

---

## Test Structure

Each test class = one critical path.

Each test method = one scenario within that path.

Required structure:

```
[Arrange]  Set up database state
[Act]      Make HTTP requests
[Assert]   Verify response AND database state
[Teardown] Clean up database
```

Test naming convention:

```
[Method]_[Scenario]_[ExpectedResult]
```

Examples:

```
Login_ValidCredentials_Returns200AndToken
Login_InvalidCredentials_Returns401
CreatePayment_ValidRequest_Returns201AndPaymentRecord
CreatePayment_InvalidAmount_Returns400
```

---

## Execution

E2E tests run BEFORE merge to master.

They do NOT run on every commit.

They do NOT run on feature branch pushes.

### Local Merge Workflow

Before merging to master, the developer (or AI agent) SHALL:

1. Ensure the API server is running (if the project has a backend)

2. Run e2e tests using the project's actual E2E command, e.g.:
   - .NET: `dotnet test --filter Category=E2E`
   - Node.js: `npx playwright test` (or the project's configured E2E script)

3. Verify all e2e tests pass

4. Create marker: `touch .e2e-passed`

5. Complete the merge

6. Push to remote

7. Delete marker: `rm .e2e-passed`

### CI Workflow

If CI exists, e2e tests SHALL be a required check for Pull Requests targeting master.

---

## Enforcement

The pre-push hook rejects pushes to master if `.e2e-passed` does not exist —
but only once the project actually has an E2E suite (a non-empty `e2e/` or
`e2e-tests/` directory). Until then, the gate does not apply: a project
with no E2E tests yet cannot be blocked by a requirement it has no way to
satisfy. The moment a real E2E suite is added, the gate activates.

Where the gate applies, it is a hard block. No override exists for the e2e requirement.

AI agents SHALL NOT bypass this mechanism.

AI agents SHALL NOT create the marker without running tests.

AI agents SHALL NOT recommend skipping e2e tests.

---

## Database Rules

• Tests MUST set up their own data

• Tests MUST clean up after themselves

• Tests MUST NOT depend on data from other tests

• Tests MUST NOT leave data in the database

• If a test fails, teardown MUST still run (use `IAsyncLifetime` or `IDisposable`)

• Database state MUST be verified after write operations

• Connection strings MUST come from environment variables

• Tests SHOULD use transactions that rollback where possible

---

## Test Isolation

Each test MUST be independent.

Tests MUST NOT share state.

Tests MUST NOT depend on execution order.

Tests MUST be safe to run in parallel unless explicitly marked as serial.

---

## What E2E Tests Are NOT

• Not unit tests

• Not integration tests (those test services in isolation)

• Not contract tests (those test API shape)

E2E tests are the full stack: HTTP through database.

---

## Marker File

The marker file `.e2e-passed` indicates that e2e tests have passed.

It MUST exist before pushing to a protected branch.

It MUST be deleted after a successful push.

It MUST NOT be created without running the tests.

It MUST be listed in `.gitignore` if the project has one.

---

## Adding New Critical Paths

When a new critical business path is identified:

1. Document it in `docs/e2e/critical-paths.md`

2. Write e2e tests for it

3. Add the `[Category("E2E")]` attribute to the test class

4. Ensure tests follow the structure and isolation rules above

---

## Removing Critical Paths

Critical paths MUST NOT be removed without explicit user instruction.

If a feature is deprecated, mark the path as deprecated in `docs/e2e/critical-paths.md` but keep the tests until the feature is fully removed.
