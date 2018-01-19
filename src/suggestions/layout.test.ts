import { createMatch } from "../regex/match";
import { layoutSuggestions, rowCount } from "./layout";

describe("layoutSuggestions", () => {
  it("places a match at its column with the matching width", () => {
    const boxes = layoutSuggestions([createMatch(3, 7, "Word", "\\w+")]);
    expect(boxes[0].left).toBe(3);
    expect(boxes[0].width).toBe(4);
    expect(boxes[0].row).toBe(0);
  });

  it("stacks overlapping matches on different rows", () => {
    const boxes = layoutSuggestions([createMatch(0, 4, "a", "a"), createMatch(2, 6, "b", "b")]);
    expect(rowCount(boxes)).toBe(2);
  });

  it("reports zero rows for no matches", () => {
    expect(rowCount(layoutSuggestions([]))).toBe(0);
  });
});
