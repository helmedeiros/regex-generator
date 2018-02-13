import { Snippet } from "./snippet";

export const javascript: Snippet = {
  language: "JavaScript",
  template: "const regex = /%REGEX%/;\nconst matched = text.match(regex);"
};
