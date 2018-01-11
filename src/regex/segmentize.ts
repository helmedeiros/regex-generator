import { Match, sortMatches } from "./match";
import { literal, pattern, Segment } from "./segment";

export function matchesToSegments(text: string, matches: Match[]): Segment[] {
  const sorted = sortMatches(matches);
  const segments: Segment[] = [];
  let cursor = 0;
  for (const match of sorted) {
    if (match.start < cursor) {
      continue;
    }
    if (match.start > cursor) {
      segments.push(literal(text.slice(cursor, match.start)));
    }
    segments.push(pattern(match.pattern));
    cursor = match.end;
  }
  if (cursor < text.length) {
    segments.push(literal(text.slice(cursor)));
  }
  return segments;
}
