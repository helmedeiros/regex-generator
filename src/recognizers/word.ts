import { Recognizer, regexRecognizer } from "./recognizer";

export const word: Recognizer = regexRecognizer("Word", "\\w+");
