import { findMatches } from "./findMatches";

describe("findMatches", () => {
  it("finds every match of a pattern", () => {
    expect(findMatches("a1 b22", "\\d+", "")).toEqual([{ start: 1, end: 2 }, { start: 4, end: 6 }]);
  });

  it("honours the case insensitive flag", () => {
    expect(findMatches("Abc", "abc", "i").length).toBe(1);
  });

  it("returns nothing for an empty pattern", () => {
    expect(findMatches("abc", "", "")).toEqual([]);
  });

  it("returns nothing for an invalid pattern", () => {
    expect(findMatches("abc", "(", "")).toEqual([]);
  });
});
