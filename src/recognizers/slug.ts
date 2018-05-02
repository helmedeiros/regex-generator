import { Recognizer, regexRecognizer } from "./recognizer";

export const slug: Recognizer = regexRecognizer("Slug", "[a-z0-9]+(?:-[a-z0-9]+)+");
