import { Recognizer, regexRecognizer } from "./recognizer";

export const logLevel: Recognizer = regexRecognizer(
  "Log level",
  "\\b(?:TRACE|DEBUG|INFO|WARN|ERROR)\\b",
  "(?:TRACE|DEBUG|INFO|WARN|ERROR)"
);
