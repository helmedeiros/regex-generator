import { Match } from "../regex/match";
import { colorFor } from "./color";
import { assignRows } from "./rows";

export interface SuggestionBox {
  match: Match;
  row: number;
  left: number;
  width: number;
  color: string;
}

export function layoutSuggestions(matches: Match[]): SuggestionBox[] {
  const rows = assignRows(matches);
  const boxes: SuggestionBox[] = [];
  rows.forEach((row, index) => {
    for (const match of row) {
      boxes.push({
        match,
        row: index,
        left: match.start,
        width: match.end - match.start,
        color: colorFor(match.name)
      });
    }
  });
  return boxes;
}

export function rowCount(boxes: SuggestionBox[]): number {
  return boxes.reduce((max, box) => Math.max(max, box.row + 1), 0);
}
