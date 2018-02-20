import { Recognizer, regexRecognizer } from "./recognizer";

export const macAddress: Recognizer = regexRecognizer(
  "MAC address",
  "(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}"
);
