import { Snippet } from "./snippet";

export const go: Snippet = {
  language: "Go",
  template: "re := regexp.MustCompile(`%REGEX%`)\nmatch := re.FindString(text)"
};
