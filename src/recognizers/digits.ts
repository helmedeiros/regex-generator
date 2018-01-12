import { Recognizer, regexRecognizer } from "./recognizer";

export const digits: Recognizer = regexRecognizer("Number", "\\d+");
