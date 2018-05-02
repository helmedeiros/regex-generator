import { Recognizer, regexRecognizer } from "./recognizer";

export const decimal: Recognizer = regexRecognizer("Decimal number", "-?\\d+\\.\\d+");
