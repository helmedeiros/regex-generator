import { singleQuoted } from "./singleQuoted";

describe("singleQuoted", () => {
  it("recognizes single quoted", () => {
    const found = singleQuoted.find("x 'hi' y")[0];
    expect(found.name).toBe("Single quoted");
    expect(found.pattern).toBe("'[^']*'");
    expect("x 'hi' y".slice(found.start, found.end)).toBe("'hi'");
  });

  it("ignores unrelated text", () => {
    expect(singleQuoted.find("none").length).toBe(0);
  });
});
