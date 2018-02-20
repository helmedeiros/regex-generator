import { Recognizer, regexRecognizer } from "./recognizer";

export const currency: Recognizer = regexRecognizer("Currency amount", "[$€£]\\d+(?:\\.\\d{2})?");
