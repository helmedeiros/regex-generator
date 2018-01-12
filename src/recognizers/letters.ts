import { Recognizer, regexRecognizer } from "./recognizer";

export const letters: Recognizer = regexRecognizer("Letters", "[A-Za-z]+");
