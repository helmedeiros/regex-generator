import { Match } from "../regex/match";
import { Recognizer } from "./recognizer";
import { defaultRecognizers } from "./registry";

export function recognize(text: string, recognizers: Recognizer[] = defaultRecognizers): Match[] {
  const matches: Match[] = [];
  for (const recognizer of recognizers) {
    for (const match of recognizer.find(text)) {
      matches.push(match);
    }
  }
  return matches;
}
