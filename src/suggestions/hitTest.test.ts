import { createMatch } from "../regex/match";
import { boxesAt } from "./hitTest";
import { layoutSuggestions } from "./layout";

describe("boxesAt", () => {
  const boxes = layoutSuggestions([createMatch(0, 4, "a", "a"), createMatch(2, 6, "b", "b")]);

  it("returns every box covering a column", () => {
    expect(boxesAt(boxes, 3).length).toBe(2);
  });

  it("returns a single box outside the overlap", () => {
    expect(boxesAt(boxes, 5).length).toBe(1);
  });

  it("returns nothing past the last box", () => {
    expect(boxesAt(boxes, 6)).toEqual([]);
  });
});
