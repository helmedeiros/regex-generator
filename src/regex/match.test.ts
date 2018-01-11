import { createMatch, overlaps, sortMatches } from "./match";

describe("match", () => {
  it("creates a match", () => {
    expect(createMatch(0, 3, "word", "\\w+")).toEqual({
      start: 0,
      end: 3,
      name: "word",
      pattern: "\\w+"
    });
  });

  it("sorts matches by start then end", () => {
    const a = createMatch(5, 8, "a", "a");
    const b = createMatch(0, 2, "b", "b");
    const c = createMatch(0, 4, "c", "c");
    expect(sortMatches([a, b, c])).toEqual([b, c, a]);
  });

  it("does not mutate the input array", () => {
    const input = [createMatch(2, 3, "a", "a"), createMatch(0, 1, "b", "b")];
    sortMatches(input);
    expect(input[0].start).toBe(2);
  });

  it("detects overlapping matches", () => {
    expect(overlaps(createMatch(0, 4, "a", "a"), createMatch(2, 6, "b", "b"))).toBe(true);
  });

  it("treats adjacent matches as non-overlapping", () => {
    expect(overlaps(createMatch(0, 3, "a", "a"), createMatch(3, 6, "b", "b"))).toBe(false);
  });
});
