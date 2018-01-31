import { createMatch } from "../regex/match";
import { toggleSelection } from "./selection";

describe("toggleSelection", () => {
  it("adds a match that is not selected", () => {
    const result = toggleSelection([], createMatch(0, 2, "a", "a"));
    expect(result.length).toBe(1);
  });

  it("removes a match that is already selected", () => {
    const match = createMatch(0, 2, "a", "a");
    expect(toggleSelection([match], match)).toEqual([]);
  });

  it("drops previously selected matches that overlap the new one", () => {
    const first = createMatch(0, 4, "a", "a");
    const second = createMatch(2, 6, "b", "b");
    const result = toggleSelection([first], second);
    expect(result).toEqual([second]);
  });

  it("keeps non-overlapping matches", () => {
    const first = createMatch(0, 2, "a", "a");
    const second = createMatch(3, 5, "b", "b");
    expect(toggleSelection([first], second).length).toBe(2);
  });
});
