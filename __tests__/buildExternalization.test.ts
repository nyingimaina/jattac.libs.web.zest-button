import { readFileSync } from "fs";
import { join } from "path";

const configSource = readFileSync(
  join(__dirname, "..", "rollup.config.mjs"),
  "utf8"
);

const extractExternalArrays = (source: string): string[] => {
  const arrays: string[] = [];
  const regex = /external:\s*\[([\s\S]*?)\]/g;
  let match: RegExpExecArray | null;
  while ((match = regex.exec(source)) !== null) {
    arrays.push(match[1]);
  }
  return arrays;
};

const externalArrays = extractExternalArrays(configSource);
const jsBundleExternal = externalArrays[0] ?? "";

describe("rollup JS bundle externalization (AC 5)", () => {
  it("treats react/jsx-runtime as external so the consumer's React is used", () => {
    expect(jsBundleExternal).toContain("react/jsx-runtime");
  });

  it("treats react/jsx-dev-runtime as external", () => {
    expect(jsBundleExternal).toContain("react/jsx-dev-runtime");
  });

  it("still externalizes react itself", () => {
    expect(jsBundleExternal).toContain("'react'");
  });

  it("still externalizes react-dom", () => {
    expect(jsBundleExternal).toContain("'react-dom'");
  });
});
