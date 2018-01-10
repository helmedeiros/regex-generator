import { literal, pattern } from "./segment";

describe("segment", () => {
  it("creates a literal segment", () => {
    expect(literal("abc")).toEqual({ kind: "literal", text: "abc" });
  });

  it("creates a pattern segment", () => {
    expect(pattern("\\d+")).toEqual({ kind: "pattern", pattern: "\\d+" });
  });
});
