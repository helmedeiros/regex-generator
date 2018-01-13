import { Recognizer, regexRecognizer } from "./recognizer";

export const hashtag: Recognizer = regexRecognizer("Hashtag", "#\\w+");
