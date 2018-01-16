import { doubleQuoted } from "./doubleQuoted";

describe("doubleQuoted", () => {
  it("recognizes double quoted", () => {
    const found = doubleQuoted.find('a "hi" b')[0];
    expect(found.name).toBe("Double quoted");
    expect(found.pattern).toBe('"[^"]*"');
    expect('a "hi" b'.slice(found.start, found.end)).toBe('"hi"');
  });

  it("ignores unrelated text", () => {
    expect(doubleQuoted.find("none").length).toBe(0);
  });
});
