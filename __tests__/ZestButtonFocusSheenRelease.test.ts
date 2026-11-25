import fs from "fs";
import path from "path";

const read = (file: string) => fs.readFileSync(path.join(__dirname, "..", file), "utf8");
const readJson = (file: string) => JSON.parse(read(file));

// R12/A1: the additive focus-streak release must not remove or rename any
// public export, prop or type, and the version metadata must agree everywhere.
describe("ZestButton focus streak release surface", () => {
  it("A1: package.json and both root package-lock entries read 1.9.0", () => {
    const pkg = readJson("package.json");
    const lock = readJson("package-lock.json");

    expect(pkg.version).toBe("1.9.0");
    expect(lock.version).toBe("1.9.0");
    expect(lock.packages[""].version).toBe("1.9.0");
  });

  it("A1: breaking-changes has the matching additive 1.9.0 section", () => {
    const version = readJson("package.json").version as string;
    const text = read("documentation/breaking-changes.md");

    expect(text).toContain(`## Version ${version}`);
    expect(text).toMatch(/- \[Version 1\.9\.0\]/);
    expect(text).toContain("no breaking changes");
  });

  it("A1: the stale toggle release assertion no longer pins the old version", () => {
    const toggleTest = read("__tests__/ZestButtonToggle.test.tsx");

    expect(toggleTest).not.toMatch(/toBe\("1\.8\.0"\)/);
    expect(toggleTest).toMatch(/toBe\("1\.9\.0"\)/);
  });

  it("R12: no existing public export is removed or renamed", () => {
    const indexSource = read("UI/index.ts");

    [
      'export { default } from "./ZestButton";',
      'export * from "./ZestButton";',
      'export { default as ZestIcon } from "./ZestIcon";',
      'export * from "./ZestIcon";',
      'export { default as ZestButtonConfigProvider } from "./ZestButtonConfigProvider";',
      'export * from "./ZestButtonConfigContext";',
      'export * from "./toggleStyle/types";',
    ].forEach((line) => expect(indexSource).toContain(line));

    expect(indexSource).not.toMatch(/sheen/i);
  });

  it("R12: the only public addition is the optional ZestCustomProps fields", () => {
    const source = read("UI/ZestButton.tsx");
    const customProps = source.slice(
      source.indexOf("export interface ZestCustomProps"),
      source.indexOf("export interface ZestButtonProps")
    );

    expect(customProps).toMatch(/focusSheen\?:\s*boolean;/);
    expect(customProps).toMatch(/sheenTrigger\?:\s*string\s*\|\s*number;/);
    expect(customProps).not.toMatch(/(^|\s)focusSheen:\s*boolean;/);
    expect(customProps).not.toMatch(/(^|\s)sheenTrigger:\s*string/);
  });
});
