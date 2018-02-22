import { Recognizer, regexRecognizer } from "./recognizer";

export const percentage: Recognizer = regexRecognizer("Percentage", "\\d+(?:\\.\\d+)?%");
