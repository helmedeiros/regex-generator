import { Recognizer, regexRecognizer } from "./recognizer";

export const time: Recognizer = regexRecognizer("Time", "\\d{2}:\\d{2}:\\d{2}");
