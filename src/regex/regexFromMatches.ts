import { buildRegex } from "./build";
import { Match } from "./match";
import { matchesToSegments } from "./segmentize";

export function buildRegexFromMatches(text: string, matches: Match[]): string {
  return buildRegex(matchesToSegments(text, matches));
}
