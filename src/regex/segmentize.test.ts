import { createMatch } from "./match";
import { matchesToSegments } from "./segmentize";

describe("matchesToSegments", () => {
  it("returns a single literal when there are no matches", () => {
    expect(matchesToSegments("abc", [])).toEqual([{ kind: "literal", text: "abc" }]);
  });

  it("wraps a match with surrounding literals", () => {
    const segments = matchesToSegments("id=42.", [createMatch(3, 5, "digits", "\\d+")]);
    expect(segments).toEqual([
      { kind: "literal", text: "id=" },
      { kind: "pattern", pattern: "\\d+" },
      { kind: "literal", text: "." }
    ]);
  });

  it("emits adjacent matches without a literal between them", () => {
    const segments = matchesToSegments("ab", [
      createMatch(0, 1, "a", "a"),
      createMatch(1, 2, "b", "b")
    ]);
    expect(segments).toEqual([
      { kind: "pattern", pattern: "a" },
      { kind: "pattern", pattern: "b" }
    ]);
  });

  it("skips a match that overlaps an already covered range", () => {
    const segments = matchesToSegments("abcd", [
      createMatch(0, 3, "wide", "\\w+"),
      createMatch(1, 2, "inner", ".")
    ]);
    expect(segments).toEqual([
      { kind: "pattern", pattern: "\\w+" },
      { kind: "literal", text: "d" }
    ]);
  });
});
