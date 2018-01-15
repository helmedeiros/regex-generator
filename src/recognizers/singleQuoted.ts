import { Recognizer, regexRecognizer } from "./recognizer";

export const singleQuoted: Recognizer = regexRecognizer("Single quoted", "'[^']*'");
