import { Match, matchKey, overlaps } from "../regex/match";

export function toggleSelection(selected: Match[], match: Match): Match[] {
  const key = matchKey(match);
  if (selected.some(picked => matchKey(picked) === key)) {
    return selected.filter(picked => matchKey(picked) !== key);
  }
  return selected.filter(picked => !overlaps(picked, match)).concat(match);
}
