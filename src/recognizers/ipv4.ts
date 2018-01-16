import { Recognizer, regexRecognizer } from "./recognizer";

export const ipv4: Recognizer = regexRecognizer(
  "IPv4 address",
  "(?:\\d{1,3}\\.){3}\\d{1,3}",
  "\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}"
);
