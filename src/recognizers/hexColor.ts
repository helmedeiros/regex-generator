import { Recognizer, regexRecognizer } from "./recognizer";

export const hexColor: Recognizer = regexRecognizer(
  "Hex color",
  "#[0-9a-fA-F]{6}\\b",
  "#[0-9a-fA-F]{6}"
);
