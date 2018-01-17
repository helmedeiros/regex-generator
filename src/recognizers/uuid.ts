import { Recognizer, regexRecognizer } from "./recognizer";

export const uuid: Recognizer = regexRecognizer(
  "UUID",
  "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"
);
