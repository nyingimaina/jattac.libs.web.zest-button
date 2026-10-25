# Verification report

Run `20261025-083546` · pack `react-component-library` · 41.9s · no agent worked and nothing was changed

## Ready to ship?

**Not fully proven: some parts could not be checked, so they are not counted as passed.**

| Status | What was checked | Evidence |
| --- | --- | --- |
| Not proven | The packed library installs and imports | The installed-library check could not run here (it is not set up in this project yet, or there is no internet connection to install into a scratch project), so the library has not been proven to work for the people who install it. |
| Not proven | Automated tests and checks pass | Not counted as passed: not set up in this project yet (devteam adopt doctor can set them up): lib-validate-package, lib-size, lib-consumer-smoke, lib-docs. |
| Ready | The tests run the code (Library) | 99% of lines run by the tests; up 0 points since the last build. |
| Ready | Nothing was skipped | Every check that applies was run. |

_DevTeam 0.54.251_

## Checks

| Check | What happened | Time |
| --- | --- | --- |
| No secrets in code | Passed | 0.1s |
| No debugging leftovers | Passed | 0.1s |
| Type check (library and tests) | Passed | 5s |
| Tests, with coverage | Passed | 19.3s |
| Build (CommonJS, ES modules, type definitions) | Passed | 7.9s |
| Package check (attw and publint) | Not run | 0.2s |
| What would be published | Passed | 1.9s |
| Publish dry run (everything npm checks, nothing is uploaded) | Passed | 1.7s |
| Size budget | Not run | 0.2s |
| Install and import the packed library | Not run | 0.2s |
| Documentation is complete | Not run | 0.1s |
| No native button element | Passed | 0.1s |
| No native table element | Passed | 0.1s |
| No native text box or text area | Passed | 0.1s |
| No native file upload input | Passed | 0.1s |
| No tiny fixed pixel font sizes | Passed | 0.1s |
| Do not block pinch-zoom on mobile | Passed | 0.1s |
| No dynamic code execution (eval / new Function) | Passed | 0.1s |
| No raw HTML injection (XSS risk) | Passed | 0.1s |
| No string-based timers (hidden eval) | Passed | 0.1s |
| No leftover debugger statements or console.log | Passed | 0.1s |
| No hard-coded colours in component code (use shared design tokens) | Passed | 0.1s |

### Package check (attw and publint): not run

```
Not set up in this project: attw and publint are not installed, so nothing checks that the package works for everyone who installs it.
```

### Size budget: not run

```
Not set up in this project: The project has no .size-limit.json, so this check has nothing to run.
```

### Install and import the packed library: not run

```
Not set up in this project: Nothing installs the packed library into a scratch project and imports it  no scripts/consumer-smoke.mjs .
```

### Documentation is complete: not run

```
Not set up in this project: The project has no scripts/check-docs.mjs, so this check has nothing to run.
```

## Browser journeys

**Not run:** you chose not to run them for this run. A real browser was not used on this build.

