import { whitespace } from "./whitespace";

describe("whitespace", () => {
  it("recognizes whitespace", () => {
    const found = whitespace.find("a b")[0];
    expect(found.name).toBe("Whitespace");
    expect(found.pattern).toBe("\\s+");
    expect("a b".slice(found.start, found.end)).toBe(" ");
  });

  it("ignores unrelated text", () => {
    expect(whitespace.find("abc").length).toBe(0);
  });
});
