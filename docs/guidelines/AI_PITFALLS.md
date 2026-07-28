# Common AI Failure Modes

Never do the following.

---

# Understanding Failures

Delete code because it appears unused.

Assume an event has no consumers.

Assume tests are complete.

Assume absence of references means safe removal.

Assume you understand code you have not read.

Assume you understand a call chain you have not fully traced.

Assume you know all consumers of a method.

Assume you know all callers of a method.

Assume existing behaviour is incorrect without evidence.

Guess business intent.

Claim certainty without evidence.

---

# Modification Failures

Rewrite working code to match personal preference.

Replace architecture while implementing features.

Modify unrelated files.

Change formatting of unrelated code.

Rename APIs without instruction.

Rename symbols without instruction.

Reorder methods without instruction.

Reorder imports without instruction.

Move files without instruction.

Modernise code without instruction.

---

# Addition Failures

Add code you think is needed but was not requested.

Add comments you think are helpful but were not requested.

Add logging you think is useful but was not requested.

Add error handling you think is necessary but was not requested.

Add null checks or defensive code you think is prudent but was not requested.

Add TODO comments about code you think needs improvement.

Add comments about code that needs refactoring.

Add try-catch blocks "just in case."

Add blanket exception handling.

Add null-forgiving operators to silence warnings.

Add #pragma disable to silence warnings.

Add SuppressMessage attributes.

Add Obsolete attributes.

Add InternalsVisibleTo for test projects.

---

# Dependency Failures

Upgrade package versions to "fix" or "improve."

Add packages you think are needed.

Remove packages you think are unused.

Change SDK versions.

Change tool versions.

---

# Configuration Failures

Modify build or CI configuration to "improve" it.

Modify database schema or migrations to "fix" something.

Modify configuration files to "improve" defaults.

Modify environment variables.

Modify secrets or secret references.

Modify Docker files or container configurations.

---

# Testing Failures

Claim tests pass without showing output.

Claim build succeeds without showing output.

Skip tests.

Disable tests.

Mark tests as ignored.

Modify tests to make them pass.

Change test expectations to match broken behaviour.

Add tests that do not assert specific values.

Add tests that only verify "does not throw."

Add tests that depend on execution order.

Add tests that depend on external state.

Add tests that do not clean up after themselves.

---

# Code Quality Failures

Change method signatures to "improve" them.

Change return types to be "more correct."

Change access modifiers to make things testable.

Make private things public for testing.

Add async/await where it was not present.

Change synchronous code to asynchronous.

Add ConfigureAwait(false) everywhere.

Add methods that do not belong in the current class.

Add classes that do not belong in the current module.

Add abstractions without clear need.

Add interfaces without clear need.

Add base classes without clear need.

---

# Process Failures

Proceed with implementation when you have not fully read the code you are modifying.

Proceeding with incomplete understanding of the call chain.

Proceeding when you have unresolved questions.

Modify files that are not directly required by the task.

Refactoring code during feature work or bug fixes.

Reordering code for "clarity" during feature work.

Reformatting code during feature work.

Renaming things during feature work.

Squashing errors silently.

Swallowing exceptions.

Ignoring failing tests.

Skipping blast radius analysis.

Forgetting to update ai-knowledge.md.

Forgetting to update decision-log.md.

Forgetting to produce a change manifest.

Forgetting to report test output.

---

# Communication Failures

Report completion without showing test output.

Report completion without producing a change manifest.

Report completion without performing self review.

Report completion with unresolved uncertainties.

Report completion with FAIL items in the self review.

Claim success without evidence.

Understate risks.

Hide unknowns.

Overstate confidence.

---

# Always

Always prefer explicit reasoning over assumptions.

Always preserve behaviour over elegance.

Always explain WHY each change was made.

Always trace changes to specific user requirements.

Always read before you write.

Always stop when uncertain.
