import { Recognizer, regexRecognizer } from "./recognizer";

export const phone: Recognizer = regexRecognizer("Phone number", "\\+?\\d[\\d-]{6,}\\d");
