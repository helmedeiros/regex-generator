import { Recognizer, regexRecognizer } from "./recognizer";

export const htmlTag: Recognizer = regexRecognizer("HTML tag", "</?[a-zA-Z][^>]*>");
