import { createMatch } from "../regex/match";
import { assignRows } from "./rows";

describe("assignRows", () => {
  it("keeps non-overlapping matches on one row", () => {
    const rows = assignRows([createMatch(0, 2, "a", "a"), createMatch(3, 5, "b", "b")]);
    expect(rows.length).toBe(1);
    expect(rows[0].length).toBe(2);
  });

  it("stacks overlapping matches on separate rows", () => {
    const rows = assignRows([createMatch(0, 4, "a", "a"), createMatch(2, 6, "b", "b")]);
    expect(rows.length).toBe(2);
  });

  it("reuses a row once an earlier match ends", () => {
    const rows = assignRows([
      createMatch(0, 4, "a", "a"),
      createMatch(2, 6, "b", "b"),
      createMatch(5, 8, "c", "c")
    ]);
    expect(rows.length).toBe(2);
    expect(rows[0].length).toBe(2);
  });

  it("returns no rows for no matches", () => {
    expect(assignRows([])).toEqual([]);
  });
});
