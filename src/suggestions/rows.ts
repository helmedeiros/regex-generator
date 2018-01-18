import { Match, sortMatches } from "../regex/match";

export function assignRows(matches: Match[]): Match[][] {
  const sorted = sortMatches(matches);
  const rows: Match[][] = [];
  for (const match of sorted) {
    let placed = false;
    for (const row of rows) {
      const last = row[row.length - 1];
      if (last.end <= match.start) {
        row.push(match);
        placed = true;
        break;
      }
    }
    if (!placed) {
      rows.push([match]);
    }
  }
  return rows;
}
