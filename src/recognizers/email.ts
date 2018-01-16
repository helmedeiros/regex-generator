import { Recognizer, regexRecognizer } from "./recognizer";

export const email: Recognizer = regexRecognizer("Email", "[\\w.+-]+@[\\w-]+\\.[\\w.-]+");
