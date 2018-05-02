import { Recognizer, regexRecognizer } from "./recognizer";

export const md5: Recognizer = regexRecognizer("MD5 hash", "\\b[0-9a-f]{32}\\b");
