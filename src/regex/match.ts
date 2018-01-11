export interface Match {
  start: number;
  end: number;
  name: string;
  pattern: string;
}

export function createMatch(start: number, end: number, name: string, pattern: string): Match {
  return { start, end, name, pattern };
}

export function sortMatches(matches: Match[]): Match[] {
  return matches.slice().sort((a, b) => a.start - b.start || a.end - b.end);
}

export function overlaps(a: Match, b: Match): boolean {
  return a.start < b.end && b.start < a.end;
}
