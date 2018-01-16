import { Recognizer, regexRecognizer } from "./recognizer";

export const doubleQuoted: Recognizer = regexRecognizer("Double quoted", '"[^"]*"');
