import { Recognizer, regexRecognizer } from "./recognizer";

export const semver: Recognizer = regexRecognizer("Version number", "\\d+\\.\\d+\\.\\d+");
