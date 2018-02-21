import { Recognizer, regexRecognizer } from "./recognizer";

export const creditCard: Recognizer = regexRecognizer(
  "Credit card",
  "\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}"
);
