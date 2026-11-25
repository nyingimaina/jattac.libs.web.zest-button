import fs from "fs";
import path from "path";

const read = (file: string) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");
const readSource = (file: string) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");

// R11: every new option must be documented for library consumers in the
// places they look, with the existing previous/next navigation kept.
describe("ZestButton focus streak documentation", () => {
  it("R11: the README shows a first focusSheen example and a sheenTrigger example", () => {
    const readme = read("README.md");

    expect(readme).toContain("`focusSheen`");
    expect(readme).toMatch(/zest=\{\{\s*focusSheen:\s*true\s*\}\}/);
    expect(readme).toContain("`sheenTrigger`");
    expect(readme).toMatch(/zest=\{\{\s*sheenTrigger:/);
    expect(readme).toMatch(/with or without `focusSheen`/);
  });

  it("R11: the API reference lists both fields with type, default and meaning", () => {
    const api = read("documentation/api.md");

    expect(api).toMatch(/`focusSheen`\s*\|\s*`boolean`\s*\|\s*`false`\s*\|/);
    expect(api).toMatch(/`sheenTrigger`\s*\|\s*`string \\?\| number`\s*\|\s*`undefined`\s*\|/);
    expect(api).toContain("#### `focusSheen`");
    expect(api).toContain("#### `sheenTrigger`");
    expect(api).toMatch(/first value on mount plays nothing/i);
  });

  it("R11: the features page describes the effect and the examples page has a recipe for both triggers", () => {
    const features = read("documentation/features.md");
    const examples = read("documentation/examples.md");

    expect(features).toMatch(/off by default;[\s\S]{0,120}focusSheen/);
    expect(features).toContain("`sheenTrigger`");
    expect(features).toMatch(/zest=\{\{\s*sheenTrigger:/);

    expect(examples).toMatch(/Recipe \d+: An Opt-In Keyboard-Focus Streak/);
    expect(examples).toMatch(/zest=\{\{\s*focusSheen:\s*true\s*\}\}/);
    expect(examples).toMatch(/zest=\{\{\s*sheenTrigger:/);
    expect(examples).toMatch(/with or without `focusSheen`/);
  });

  it("R11: breaking-changes records the release as additive with no action needed", () => {
    const breaking = read("documentation/breaking-changes.md");
    const start = breaking.indexOf("## Version 1.9.0");
    expect(start).toBeGreaterThan(-1);

    const next = breaking.indexOf("## Version 1.8.0", start);
    const section = breaking.slice(start, next === -1 ? undefined : next);

    expect(section).toMatch(/additive/i);
    expect(section).toMatch(/no breaking changes/i);
    expect(section).toMatch(/no action/i);
    expect(section).toContain("focusSheen");
    expect(section).toContain("sheenTrigger");
    expect(section).not.toMatch(/breaking change:/i);
  });

  it("R11: every touched documentation page keeps its existing previous and next links", () => {
    const pages = [
      "README.md",
      "documentation/api.md",
      "documentation/features.md",
      "documentation/examples.md",
      "documentation/configuration.md",
      "documentation/development.md",
      "documentation/breaking-changes.md",
    ];

    pages.forEach((page) => {
      const text = read(page);
      expect(text).toMatch(/Previous:/);
      expect(text).toMatch(/Next:/);
    });
  });

  it("R11: the documented default is off, matching the code", () => {
    const api = read("documentation/api.md");
    const source = readSource("UI/ZestButton.tsx");

    expect(api).toMatch(/`focusSheen`\s*\|\s*`boolean`\s*\|\s*`false`\s*\|/);
    expect(source).toMatch(/focusSheen\s*=\s*false/);
    expect(source).toMatch(/sheenTrigger,/);
  });

  it("R11: the docs do not promise an app-wide styles setting, a ref handle or a reduced-motion override", () => {
    const pages = [
      "README.md",
      "documentation/api.md",
      "documentation/features.md",
      "documentation/examples.md",
      "documentation/configuration.md",
      "documentation/development.md",
      "docs/features/zest-button-focus-sheen/guide.md",
    ];

    pages.forEach((page) => {
      const text = read(page);
      expect(text).not.toMatch(/focusSheenRef|sheenRef|styles\.focusSheen|styles:\s*\{[^}]*focusSheen/i);
      expect(text).not.toMatch(/forceSheen|sheenForce|motionOverride|reducedMotionOverride/);
      expect(text).not.toMatch(/override[s]? (the )?reduced motion/i);
    });
  });
});
