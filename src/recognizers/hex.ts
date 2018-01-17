import { Recognizer, regexRecognizer } from "./recognizer";

export const hex: Recognizer = regexRecognizer(
  "Hex number",
  "\\b0x[0-9a-fA-F]+\\b",
  "0x[0-9a-fA-F]+"
);
