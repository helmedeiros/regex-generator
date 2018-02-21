import { Recognizer, regexRecognizer } from "./recognizer";

export const booleanWord: Recognizer = regexRecognizer(
  "Boolean",
  "\\b(?:true|false)\\b",
  "(?:true|false)"
);
