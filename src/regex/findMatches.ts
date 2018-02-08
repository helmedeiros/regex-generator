export interface Range {
  start: number;
  end: number;
}

export function findMatches(text: string, pattern: string, flags: string): Range[] {
  if (pattern.length === 0) {
    return [];
  }
  const globalFlags = flags.indexOf("g") >= 0 ? flags : `${flags}g`;
  let regex: RegExp;
  try {
    regex = new RegExp(pattern, globalFlags);
  } catch {
    return [];
  }
  const ranges: Range[] = [];
  let hit = regex.exec(text);
  while (hit !== null) {
    if (hit[0].length === 0) {
      regex.lastIndex += 1;
    } else {
      ranges.push({ start: hit.index, end: hit.index + hit[0].length });
    }
    hit = regex.exec(text);
  }
  return ranges;
}
