import { Recognizer, regexRecognizer } from "./recognizer";

export const isoTimestamp: Recognizer = regexRecognizer(
  "ISO timestamp",
  "\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?Z?"
);
