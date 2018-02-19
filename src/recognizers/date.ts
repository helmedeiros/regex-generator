import { Recognizer, regexRecognizer } from "./recognizer";

export const date: Recognizer = regexRecognizer("Date", "\\d{4}-\\d{2}-\\d{2}");
