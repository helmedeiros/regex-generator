import { Recognizer, regexRecognizer } from "./recognizer";

export const url: Recognizer = regexRecognizer("URL", "https?://[^\\s]+");
