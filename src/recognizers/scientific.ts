import { Recognizer, regexRecognizer } from "./recognizer";

export const scientific: Recognizer = regexRecognizer(
  "Scientific notation",
  "-?\\d+(?:\\.\\d+)?[eE][+-]?\\d+"
);
