import { Recognizer, regexRecognizer } from "./recognizer";

export const whitespace: Recognizer = regexRecognizer("Whitespace", "\\s+");
