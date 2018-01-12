import { createMatch, Match } from "../regex/match";

export interface Recognizer {
  name: string;
  find(text: string): Match[];
}

export function regexRecognizer(
  name: string,
  source: string,
  pattern: string = source
): Recognizer {
  return {
    name,
    find(text: string): Match[] {
      const finder = new RegExp(source, "g");
      const matches: Match[] = [];
      let hit = finder.exec(text);
      while (hit !== null) {
        if (hit[0].length > 0) {
          matches.push(createMatch(hit.index, hit.index + hit[0].length, name, pattern));
        } else {
          finder.lastIndex += 1;
        }
        hit = finder.exec(text);
      }
      return matches;
    }
  };
}
