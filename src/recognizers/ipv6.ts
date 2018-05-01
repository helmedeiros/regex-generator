import { Recognizer, regexRecognizer } from "./recognizer";

export const ipv6: Recognizer = regexRecognizer(
  "IPv6 address",
  "(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}"
);
