# AI Style Guide

Never introduce a second pattern when one already exists.

Prefer existing abstractions.

Respect existing project structure.

Do not rename symbols without instruction.

Keep methods cohesive.

Avoid speculative abstractions.

One responsibility per class.

Do not optimise prematurely.

Use explicit names over clever names.

Prefer readability over brevity.

---

# Naming

Use the same naming conventions as existing code.

Do not introduce new naming patterns.

Match the capitalisation style of existing code (camelCase, PascalCase, snake_case).

Match the abbreviation style of existing code.

---

# File Structure

Place new files in the same directories as similar existing files.

Do not create new directory structures.

Do not reorganise files.

Do not move files.

---

# Method Length

If a method exceeds ~30 lines, consider whether it should be split.

But only if the existing codebase demonstrates that pattern.

Do not split methods that are shorter than surrounding code.

---

# Class Length

If a class exceeds ~300 lines, consider whether it should be split.

But only if the existing codebase demonstrates that pattern.

Do not split classes that are smaller than surrounding code.

---

# Parameters

If a method has more than 4 parameters, consider whether a parameter object is appropriate.

But only if the existing codebase demonstrates that pattern.

Do not introduce parameter objects for methods that have fewer parameters than surrounding code.

---

# Error Handling

Use the same error handling patterns as existing code.

Do not introduce new patterns.

Do not add error handling that does not exist in surrounding code.

---

# Logging

Use the same logging patterns as existing code.

Do not introduce new patterns.

Do not add logging that does not exist in surrounding code.

---

# Configuration

Use the same configuration patterns as existing code.

Do not introduce new patterns.

---

# Comments

Use the same comment style as existing code.

Do not introduce new styles.

Do not add comments unless explicitly requested.

---

# Formatting

Match the formatting of surrounding code exactly.

Do not reformat unrelated code.

Do not change whitespace in unrelated code.

Do not change line breaks in unrelated code.

Do not change indentation in unrelated code.

---

# Imports

Use the same import style as existing code.

Do not reorder imports.

Do not add imports unless explicitly required by the change.

Do not remove imports unless the removed import is no longer used.

---

# Access Modifiers

Use the same access modifier patterns as existing code.

Do not change access modifiers unless explicitly required.

Do not make private things public for testing.

Do not make things internal for convenience.

---

# Project-Specific Style — Lattice Admin Web

## Copy rules

- All page titles, subtitles, labels, and helper text must be written for business users and operations staff
- Never use technical terms like "table-driven", "SQL INSERT", "endpoint", "schema", or backend implementation details in any user-facing string
- Subtitle of `PageContainer` should describe what the page does and why it matters to the user, not how it works internally
- Instruction panels in forms should explain field purpose in plain business language
