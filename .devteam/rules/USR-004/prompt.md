You turn a house rule, written in plain English by the owner of an app, into automatic checks that a build tool will enforce. The rule is the owner's order: it is not a suggestion.

Rule USR-004: when editing code that has already been merged into master, even in branches that have master as an ancestor, characterization tests must first be created to validate existing behaviour if what we are doing is meant to add onto existing behaviour so that we don't break code already deployed to production

What the app looks like (a sample of its files, and its package.json when it has one):
- .githooks/commit-msg
- .githooks/pre-commit
- .githooks/pre-merge-commit
- .githooks/pre-push
- .gitignore
- BRS.md
- DIRECTIVES.md
- LICENSE
- README.md
- Styles/ZestButton.module.css
- UI/SpinnerIcon.tsx
- UI/ZestButton.tsx
- UI/ZestButtonConfigContext.ts
- UI/ZestButtonConfigProvider.tsx
- UI/ZestDropdownMenu.tsx
- UI/ZestDropdownMenuItem.tsx
- UI/hooks/useBusyState.ts
- UI/hooks/useConfirmation.ts
- UI/hooks/useThemeDetection.ts
- UI/hooks/useZestConfig.ts
- UI/index.ts
- UI/semanticTypeButtonConfigDefaults.tsx
- WORKPLAN.md
- __tests__/SpinnerIcon.test.tsx
- __tests__/ZestButton.test.tsx
- __tests__/ZestButtonConfigContext.test.tsx
- __tests__/ZestButtonConfigProvider.test.tsx
- __tests__/ZestDropdownMenu.test.tsx
- __tests__/ZestDropdownMenuItem.test.tsx
- __tests__/buildExternalization.test.ts
- __tests__/hooks/useBusyState.test.ts
- __tests__/hooks/useConfirmation.test.ts
- __tests__/hooks/useThemeDetection.test.ts
- __tests__/hooks/useZestConfig.test.ts
- __tests__/packagePeerDependencies.test.ts
- __tests__/semanticTypeButtonConfigDefaults.test.tsx
- agents.md
- ai-policy.yaml
- docs/e2e/critical-paths.md
- docs/features/react-19-support/BRS.md
- docs/features/zest-button-dropdown-options/BRS.md
- docs/guidelines/AI_ARCHITECTURE.md
- docs/guidelines/AI_BRS.md
- docs/guidelines/AI_CODE_REVIEW.md
- docs/guidelines/AI_E2E_TESTING.md
- docs/guidelines/AI_GIT_WORKFLOW.md
- docs/guidelines/AI_KNOWLEDGE.md
- docs/guidelines/AI_PITFALLS.md
- docs/guidelines/AI_STYLE_GUIDE.md
- docs/guidelines/AI_TESTING.md
- docs/guidelines/AI_TEST_CONFIGURATION.md
- docs/guidelines/AI_WORKFLOW.md
- docs/guidelines/AI_WORKFLOW_TRIGGERS.md
- docs/guidelines/ai-knowledge.md
- docs/guidelines/decision-log.md
- documentation/api.md
- documentation/breaking-changes.md
- documentation/configuration.md
- documentation/development.md
- documentation/examples.md
- documentation/features.md
- global.d.ts
- how-to-document.md
- jest.config.js
- jest.setup.js
- package-lock.json
- package.json
- rollup.config.mjs
- scripts/bootstrap.ps1
- scripts/bootstrap.sh
- scripts/verify-post.ps1
- scripts/verify-pre.ps1
- test-reports/CHANGE_MANIFEST_dropdown-options.md
- test-reports/CHANGE_MANIFEST_jest-wiring.md
- test-reports/CHANGE_MANIFEST_react-19-vite.md
- test-reports/coverage-baseline.json
- test-reports/post-verify-2026-07-28_073035.html
- test-reports/post-verify-2026-07-28_074031.html
- test-reports/post-verify-2026-07-28_080448.html
- test-reports/post-verify-2026-07-28_093120.html
- test-reports/post-verify-2026-07-28_093739.html
- test-reports/post-verify-2026-07-28_094329.html
- test-reports/post-verify-2026-07-28_094444.html
- test-reports/post-verify-2026-07-28_095001.html
- test-reports/post-verify-2026-09-23_215049.html
- test-reports/pre-verify-2026-07-28_073020.html
- test-reports/pre-verify-2026-07-28_074014.html
- test-reports/pre-verify-2026-07-28_080430.html
- test-reports/pre-verify-2026-07-28_093100.html
- test-reports/pre-verify-2026-07-28_094525.html
- test-reports/pre-verify-2026-07-28_094600.html
- test-reports/pre-verify-2026-07-28_094946.html
- tsconfig.jest.json
- tsconfig.json

package.json:
{
  "name": "jattac.libs.web.zest-button",
  "version": "1.5.3",
  "description": "A highly customizable and production-ready React button component featuring robust asynchronous handling, rich visual feedback, and built-in confirmation flows for enhanced user experience",
  "homepage": "https://github.com/nyingimaina/jattac.libs.web.zest-button#readme",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/nyingimaina/jattac.libs.web.zest-button.git"
  },
  "bugs": {
    "url": "https://github.com/nyingimaina/jattac.libs.web.zest-button/issues"
  },
  "main": "dist/index.cjs.js",
  "module": "dist/index.esm.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "types": "./dist/index.d.ts",
      "import": "./dist/index.esm.js",
      "require": "./dist/index.cjs.js"
    },
    "./dist/*": "./dist/*",
    "./package.json": "./package.json"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE",
    "documentation"
  ],
  "scripts": {
    "build": "rollup -c rollup.config.mjs",
    "dev": "rollup -c rollup.config.mjs -w",
    "test": "jest --coverage"
  },
  "keywords": [
    "react",
    "button",
    "ui",
    "component",
    "interactive",
    "react-button",
    "form",
    "web",
    "async",
    "loading",
    "confirmation",
    "feedback",
    "animation",
    "transitions",
    "ux",
    "zest",
    "jattac"
  ],
  "author": "Jattac",
  "license": "MIT",
  "peerDependencies":
…


Write checks of these kinds only:
- "pattern": looks line by line in every file matching the "files" patterns (paths relative to the app folder, forward slashes, ** and * allowed) and FAILS if the regular expression in "forbid" matches a line. Use this to forbid what the rule forbids (for example a native element or an import the rule says not to use).
- "command": runs a shell command in "workingDir" (relative to the app folder) and FAILS if it exits with a non-zero code. Use it only when no pattern can decide the rule (for example a dependency that must be present). The owner is shown the command before anything is saved.

Also give two short snippets: "good" (code that follows the rule) and "bad" (code that breaks it). Every pattern check is tested against them: the pattern checks together must match the bad example, and none may match the good example. If the rule has parts no check can decide, say what in "cannotTest" (a reviewer will judge those). If NO check can decide the rule at all, answer with an empty "checks" list and explain in "cannotTest".

Be precise: a check must not fire on code that follows the rule. Prefer few, reliable checks (at most 6). Never write a check that matches every line.

Write ONLY a JSON file at D:\work\nyingi\code\systems\Jattac.Libs.Web.ZestButton\.devteam\rules\USR-004\result.json with exactly this shape:
{ "checks": [ { "name": "short plain name", "kind": "pattern", "files": ["web/src/**/*.tsx"], "forbid": "<button[ >]" } ], "good": "snippet", "bad": "snippet", "cannotTest": "", "facts": [] }
"facts" is optional: when the rule sets a limit on something measurable, write it as { "subject": "search term", "attribute": "length", "op": "at-least", "value": "3", "unit": "characters" } (ops: equals, not, one-of, at-least, at-most, between, must, must-not) so two rules that cannot both hold are found. Leave it empty when the rule sets no such limit. The examples must not break the other rules of the app.
Do not change any other file.