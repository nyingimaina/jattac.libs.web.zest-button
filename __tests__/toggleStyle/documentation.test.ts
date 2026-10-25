import * as fs from "fs";
import * as path from "path";
import { compileToggleStyle } from "../../UI/toggleStyle/compileToggleStyle";
import type { ZestToggleStyle } from "../../UI";

const root = path.resolve(__dirname, "../..");
const read = (file: string) => fs.readFileSync(path.join(root, file), "utf8");

// The example shared by README.md, configuration.md, features.md and examples.md.
const documented: ZestToggleStyle = {
  off: { background: "transparent", borderRadius: "0.5rem" },
  on: { background: "#0a7", color: "#fff", checkColor: "#fff" },
  hoverOn: { background: "#086" },
  dark: { on: { background: "#0c9" } },
  sizes: { lg: { off: { fontSize: "1.25rem" } } },
  variants: { danger: { on: { background: "#c00" } } },
};

describe("toggle styling documentation", () => {
  it("R10: the documented example uses settings that exist and produces every documented look", () => {
    const light = compileToggleStyle(documented, undefined, "light", "danger", "lg");
    expect(light?.css).toContain("border-radius:0.5rem");
    expect(light?.css).toContain("background:#c00");
    expect(light?.css).toContain("font-size:1.25rem");
    expect(light?.css).toContain("background:#086");
    const dark = compileToggleStyle(documented, undefined, "dark", "standard", "md");
    expect(dark?.css).toContain("background:#0c9");
  });

  it("R10: every page that shows the feature links to the toggle styling reference and names the real settings", () => {
    for (const file of ["README.md", "documentation/configuration.md", "documentation/features.md", "documentation/examples.md"]) {
      const text = read(file);
      expect(text).toContain("styles: {");
      expect(text).toContain("toggle: {");
    }
    const api = read("documentation/api.md");
    for (const name of ["ZestToggleStyle", "ZestToggleStyleLayer", "ZestToggleStateLooks", "ZestToggleStyleLook", "ZestToggleStyleValue", "ZestButtonStyles"]) {
      expect(api).toContain(name);
    }
    const types = read("UI/toggleStyle/types.ts");
    for (const name of ["ZestToggleStyle", "ZestToggleStyleLayer", "ZestToggleStateLooks", "ZestToggleStyleLook", "ZestToggleStyleValue", "ZestButtonStyles"]) {
      expect(types).toContain(`export ${name === "ZestToggleStyleValue" ? "type" : "interface"} ${name}`);
    }
  });

  it("R10: breaking-changes documents the current package version as additive", () => {
    const version = JSON.parse(read("package.json")).version as string;
    const text = read("documentation/breaking-changes.md");
    expect(text).toContain(`## Version ${version}`);
    expect(text).toContain("no breaking changes");
  });
});
