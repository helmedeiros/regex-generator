import { semver } from "./semver";

describe("semver", () => {
  it("recognizes version number", () => {
    const found = semver.find("v 1.2.3 rel")[0];
    expect(found.name).toBe("Version number");
    expect(found.pattern).toBe("\\d+\\.\\d+\\.\\d+");
    expect("v 1.2.3 rel".slice(found.start, found.end)).toBe("1.2.3");
  });

  it("ignores unrelated text", () => {
    expect(semver.find("1.2").length).toBe(0);
  });
});
