import { Recognizer, regexRecognizer } from "./recognizer";

export const sha1: Recognizer = regexRecognizer("SHA-1 hash", "\\b[0-9a-f]{40}\\b");
