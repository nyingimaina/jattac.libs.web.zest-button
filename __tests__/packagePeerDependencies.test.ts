import { readFileSync } from "fs";
import { join } from "path";

interface SemVer {
  major: number;
  minor: number;
  patch: number;
}

const parseVersion = (version: string): SemVer => {
  const [major, minor, patch] = version
    .replace(/^[^\d]*/, "")
    .split(".")
    .map((part) => parseInt(part, 10));
  return { major, minor, patch };
};

const compare = (a: SemVer, b: SemVer): number => {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  return a.patch - b.patch;
};

const satisfiesComparator = (version: SemVer, comparator: string): boolean => {
  const trimmed = comparator.trim();
  if (trimmed.startsWith(">=")) {
    return compare(version, parseVersion(trimmed.slice(2))) >= 0;
  }
  if (trimmed.startsWith("<=")) {
    return compare(version, parseVersion(trimmed.slice(2))) <= 0;
  }
  if (trimmed.startsWith(">")) {
    return compare(version, parseVersion(trimmed.slice(1))) > 0;
  }
  if (trimmed.startsWith("<")) {
    return compare(version, parseVersion(trimmed.slice(1))) < 0;
  }
  if (trimmed.startsWith("^")) {
    const base = parseVersion(trimmed.slice(1));
    if (compare(version, base) < 0) return false;
    return base.major > 0
      ? version.major === base.major
      : version.major === 0 && version.minor === base.minor;
  }
  return compare(version, parseVersion(trimmed)) === 0;
};

const satisfies = (version: string, range: string): boolean =>
  range
    .split("||")
    .some((group) =>
      group
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .every((comparator) => satisfiesComparator(parseVersion(version), comparator))
    );

const packageJson = JSON.parse(
  readFileSync(join(__dirname, "..", "package.json"), "utf8")
);
const reactRange: string = packageJson.peerDependencies.react;
const reactDomRange: string = packageJson.peerDependencies["react-dom"];

describe("package.json peerDependencies React support", () => {
  it("declares React 19 support (AC 1)", () => {
    expect(satisfies("19.0.0", reactRange)).toBe(true);
    expect(satisfies("19.0.0", reactDomRange)).toBe(true);
  });

  it("allows future majors so support is 'onwards' (AC 2)", () => {
    expect(satisfies("20.0.0", reactRange)).toBe(true);
    expect(satisfies("20.0.0", reactDomRange)).toBe(true);
  });

  it("keeps React 18 supported (AC 3)", () => {
    expect(satisfies("18.2.0", reactRange)).toBe(true);
    expect(satisfies("18.2.0", reactDomRange)).toBe(true);
  });

  it("no longer claims untested EOL majors 16.8/17 (AC 4)", () => {
    for (const range of [reactRange, reactDomRange]) {
      expect(satisfies("16.8.0", range)).toBe(false);
      expect(satisfies("17.0.0", range)).toBe(false);
    }
  });

  it("keeps react and react-dom ranges in lockstep", () => {
    expect(reactDomRange).toBe(reactRange);
  });
});

const exportsMap = packageJson.exports;

describe("package.json exports map (Vite / bundler resolution)", () => {
  it("exposes the ESM entry under the import condition", () => {
    expect(exportsMap["."].import).toBe("./dist/index.esm.js");
  });

  it("exposes the CJS entry under the require condition", () => {
    expect(exportsMap["."].require).toBe("./dist/index.cjs.js");
  });

  it("lists types first so modern module resolution finds declarations", () => {
    expect(exportsMap["."].types).toBe("./dist/index.d.ts");
    expect(Object.keys(exportsMap["."])[0]).toBe("types");
  });

  it("preserves existing deep imports under dist/", () => {
    expect(exportsMap["./dist/*"]).toBe("./dist/*");
  });

  it("exposes package.json for tooling", () => {
    expect(exportsMap["./package.json"]).toBe("./package.json");
  });
});
