# Architectural Rules

Business behaviour is more important than implementation.

---

# Composition

Composition SHALL be preferred over modification of existing code.

Decision process:

Can composition reasonably solve the problem?

YES

Use composition.

NO

Continue.

Does existing code violate business behaviour?

YES

Modify existing code.

NO

Continue.

Would composition become unreasonable?

YES

Modify existing code.

NO

Use composition.

When composition is chosen, the new code MUST NOT alter the behaviour of existing code.

Composition means addition, not modification.

---

# Existing Code

Existing code SHALL NOT be rewritten merely because another implementation is preferred.

Do not replace architecture.

Do not modernise code.

Do not rename symbols.

Do not move files.

Do not reformat unrelated code.

Do not optimise speculative bottlenecks.

---

# Behaviour

Existing behaviour is assumed correct unless:

• failing tests prove otherwise

OR

• user explicitly requests behavioural change

---

# Scope

Only modify code necessary to complete the requested task.

Never perform opportunistic refactors.

---

# Simplicity

Choose the smallest correct change.

Smaller changes reduce regression risk.

---

# Unknowns

When uncertain:

Stop.

Explain uncertainty.

Never guess business rules.

---

# Absolute Prohibitions

The following MUST NOT be done unless explicitly instructed by the user.

## Dependencies

Do NOT change package versions, SDK versions, or tool versions.

Do NOT add NuGet packages, npm packages, pip packages, Cargo crates, Go modules, or any other dependencies.

Do NOT remove dependencies.

## Configuration

Do NOT modify configuration files (appsettings.json, .env, docker-compose.yml, app.config, web.config, or any other config).

Do NOT modify environment variables.

Do NOT modify secrets or secret references.

## CI/CD and Infrastructure

Do NOT modify CI/CD pipelines, build scripts, or deployment configurations.

Do NOT modify GitHub Actions, Azure DevOps pipelines, or any other CI configuration.

Do NOT modify Docker files or container configurations.

Do NOT modify infrastructure-as-code files.

## Database

Do NOT modify database migrations.

Do NOT modify database schema.

Do NOT modify stored procedures.

Do NOT modify database scripts.

Do NOT create new database tables or columns.

## Code Changes

Do NOT add comments unless explicitly instructed.

Do NOT add logging unless explicitly instructed.

Do NOT add error handling (try-catch, null checks, defensive code) unless explicitly instructed.

Do NOT add TODO comments.

Do NOT add comments about code that needs improvement.

Do NOT change method signatures, return types, or public API surface.

Do NOT change access modifiers (private to public, etc.).

Do NOT change synchronous code to asynchronous.

Do NOT add async/await where it was not present.

Do NOT add ConfigureAwait(false).

Do NOT add null-forgiving operators (!) to silence warnings.

Do NOT add #pragma disable to silence warnings.

Do NOT add SuppressMessage attributes.

Do NOT add Obsolete attributes.

Do NOT add EditorBrowsable(Never).

Do NOT add InternalsVisibleTo for test projects.

Do NOT add blanket try-catch blocks.

Do NOT swallow exceptions.

Do NOT change exception types.

Do NOT change return values.

## Formatting and Naming

Do NOT rename variables, methods, classes, or any other symbols.

Do NOT reorder methods, properties, fields, or any other members.

Do NOT reformat code that was not part of the request.

Do NOT change whitespace or line breaks in unrelated code.

Do NOT change using directives or import statements.

Do NOT change namespace declarations.

---

# Change Justification

Every change you make MUST be directly traceable to a specific requirement in the user's request.

If you cannot draw a direct line from the user's words to the change, do not make the change.

If you are unsure whether a change is required, ask the user.

---

# Rollback

Every change MUST be independently revertible.

Do not create changes that depend on each other unless they are part of the same logical unit.

If a change cannot be independently reverted, document this in the change manifest.

---

# Project-Specific Architecture — Lattice Admin Web

These are the concrete conventions of this repository. They are the "pattern discovery" reference required by AI_WORKFLOW.md Step 8 — match new code to these before inventing anything new.

## Stack

Next.js (App Router), TypeScript, React class components for stateful pages.

## Project layout

Features live under `app/admin/` (admin-only) or `app/` (shared). Each feature contains:
- `page.tsx` — Next.js route entry point
- `Data/IModel.ts` — TypeScript interface mirroring the backend model
- `Data/ModelApiAccessor.ts` — HTTP calls to the backend
- `State/ModelRepository.ts` — extends `RepositoryBase`, holds reactive state
- `State/ModelLogic.ts` — extends `LogicBase`, contains all business logic
- `UI/ModelManager.tsx` — the page component

## Page entry pattern

```tsx
"use client";
import ManagerAccount from "@/app/account/UI/ManagerAccount";
import FooManager from "./UI/FooManager";

export default function FooPage() {
  return (
    <ManagerAccount>
      <FooManager />
    </ManagerAccount>
  );
}
```

## State management

```ts
// Repository — holds only state, no logic
export default class FooRepository extends RepositoryBase {
  items: IFoo[] = [];
}

// Logic — all async operations go here
const logic = new FooLogic(); // instantiated at module level, outside the component

export default class FooLogic extends LogicBase<FooRepository, IFoo> {
  repository = new FooRepository();
  model = {} as IFoo;

  async initializeAsync() {
    await this.runner(async () => {
      this.repository.items = await new FooApiAccessor().getAllAsync();
    });
  }
}
```
- `runner()` handles the `busy` flag automatically — always use it for async operations
- Logic is instantiated at module level (outside the component class), not inside it

## Components

- Stateful pages use `PureComponent` class components with `logic.setRerender(() => this.forceUpdate())` in `componentDidMount`
- `componentDidMount` must call `logic.initializeAsync()`
- Use `FrostedGlassOverlay show={logic.repository.busy}` to block interaction during loads
- Use `PageContainer title="..." subtitle="..."` as the top-level wrapper

## API accessors

```ts
export default class FooApiAccessor extends ApiAccessor {
  constructor() {
    super({ controller: "foo", backendService: "fua" }); // or "lattice"
  }

  async getAllAsync(): Promise<IFoo[]> {
    return await this.getUnwrappedAsync<IFoo[]>({ url: "items" });
  }

  async createAsync(payload: Omit<IFoo, "id">): Promise<void> {
    await this.postWithUnwrappedResponseAsync({ url: "items", body: payload });
  }
}
```
- `fetchData` supports only `"GET"` and `"POST"` — there is no DELETE method
- Delete operations must POST to a delete endpoint: `postWithUnwrappedResponseAsync({ url: "items/delete/${id}", body: {} })`
- URL segments must match the backend controller route exactly (controller class name minus "Controller", lowercase)

## UI components

| Need | Component |
|---|---|
| Page layout | `PageContainer` with `title` and `subtitle` |
| Sidepane layout | `ZestResponsiveLayout` with `sidePane` prop |
| Buttons | `ZestButton` with `visualOptions={{ variant: "success" \| "danger" \| "info" }}` |
| Text inputs | `ZestTextbox` — use `isMultiline` + `rows` for textareas, `stretch` for full width |
| Dropdowns | `SelectWrapper` — always use this, never a raw `<select>` |
| Forms | See form system section below |
| Tables | `ResponsiveTable` with `data` and `columnDefinitions` (each with `cellRenderer` + `displayLabel`) |
| Action rows | `ActionBar` |
| Loading overlay | `FrostedGlassOverlay show={logic.repository.busy}` |

## Form system

All forms use the component system from `@/app/Forms/Form/UI/Form`. Never style inputs or form layouts with raw inline styles.

### Component hierarchy

```
Form
  FormSection?          ← optional named section (title + subtle background, good for long standalone forms)
    FormControlGroup?   ← optional titled group (dashed border header, good for sidepane sections)
      FormRow           ← horizontal flex row, wraps on small screens
        FormControlGroup  ← one input+label unit; min-width 250px so it auto-wraps when space runs out
          FormLabel       ← shows label + required asterisk by default
          {input}         ← ZestTextbox, SelectWrapper, checkbox etc.
```

### Rules

**Always use `FormRow` to place related fields side by side.** Never stack items that logically belong together by leaving them as sequential block elements — use `FormRow` so they share a row when space allows and wrap gracefully on narrow screens.

**Every input must be wrapped in `FormControlGroup > FormLabel + input`.** No bare inputs, no bare labels.

**Mark optional fields.** `FormLabel` adds `*` by default (required). Add `optional` prop for non-required fields:
```tsx
<FormLabel optional>Description</FormLabel>
```

**Use `FormControlGroup title="..."` to group related fields in a sidepane.** This renders a dashed section header — use it instead of `FormSection` inside sidepanes where vertical space is at a premium:
```tsx
<FormControlGroup title="Trigger Settings">
  <FormRow>
    <FormControlGroup>...</FormControlGroup>
    <FormControlGroup>...</FormControlGroup>
  </FormRow>
</FormControlGroup>
```

**Use `FormSection` for standalone full-page forms** where sections need more visual weight (title + `#f9fafb` background panel).

**Use `SelectWrapper` for all dropdowns**, including static option lists:
```tsx
const RISK_LEVELS = [
  { value: "High", label: "High" },
  { value: "Critical", label: "Critical" },
];

<SelectWrapper
  data={RISK_LEVELS}
  selectedResolver={(r) => r.value === item.riskLevel}
  valueResolver={(r) => r.value}
  labelResolver={(r) => r.label}
  onChange={(selected) => update({ riskLevel: selected[0]?.value ?? "High" })}
  isClearable={false}
  isSearchable={false}
/>
```

**Full-width fields** (long text, description, multiline) go in a standalone `FormControlGroup` outside a `FormRow` — they naturally fill 100% width. Use `stretch` on `ZestTextbox`:
```tsx
<FormControlGroup>
  <FormLabel optional>Description</FormLabel>
  <ZestTextbox type="text" stretch value={...} onChange={...} />
</FormControlGroup>
```

**Number inputs** go in `FormRow` with their peers — never alone as a block element:
```tsx
<FormRow>
  <FormControlGroup>
    <FormLabel>Threshold (events)</FormLabel>
    <ZestTextbox type="number" value={...} onChange={...} />
  </FormControlGroup>
  <FormControlGroup>
    <FormLabel>Window (days)</FormLabel>
    <ZestTextbox type="number" value={...} onChange={...} />
  </FormControlGroup>
</FormRow>
```

**Checkboxes** — no styled component exists; use native `<input type="checkbox">` inside `FormControlGroup`:
```tsx
<FormControlGroup>
  <FormLabel>Enabled</FormLabel>
  <input
    type="checkbox"
    checked={item.isEnabled}
    onChange={(e) => update({ isEnabled: e.target.checked })}
    style={{ width: 16, height: 16, marginTop: 6 }}
  />
</FormControlGroup>
```

### Sidepane form reference layout

For a sidepane create/edit form, structure fields in this order:
1. Identity fields (name, code, key identifier) — `FormRow` with type/category/risk selector
2. Optional descriptive fields — standalone full-width `FormControlGroup`
3. Related configuration fields — `FormControlGroup title="..."` wrapping a `FormRow`
4. Long text fields (messages, notes) — `FormControlGroup title="..."` wrapping individual full-width fields
5. Toggle/boolean fields — `FormRow` of checkboxes
6. Help/instruction panel — `<div>` with `background: #f9fafb`, 11px text, business-language explanations

## Sidepane pattern

```tsx
<ZestResponsiveLayout
  sidePane={{
    visible: !!this.state.itemForSidePane,
    title: this.#isEditing ? `Edit — ${item.name}` : "Add Item",
    pane: this.#sidePaneContent ?? <></>,
    onClose: () => this.setState({ itemForSidePane: undefined }),
  }}
  desktopSidePaneWidth="500px"
  enableBounceAnimation={false}
  detailPane={<>...table and action bar...</>}
/>
```
- Never use modals for create/edit forms — always use the sidepane
- Sidepane title adapts: "Add X" for new, "Edit — {name}" for existing

## Navigation

New admin pages must be registered in `app/account/UI/MenuItems/AdminMenuItemsProvider.tsx` under the correct parent group.

## Routing

- Admin pages: `app/admin/[feature]/page.tsx`
- Route segments must be kebab-case
