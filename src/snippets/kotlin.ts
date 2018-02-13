import { Snippet } from "./snippet";

export const kotlin: Snippet = {
  language: "Kotlin",
  template: 'val regex = Regex("%REGEX%")\nval match = regex.find(text)'
};
