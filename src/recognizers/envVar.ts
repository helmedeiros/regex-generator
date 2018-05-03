import { Recognizer, regexRecognizer } from "./recognizer";

export const envVar: Recognizer = regexRecognizer("Environment variable", "\\$[A-Z_][A-Z0-9_]*");
