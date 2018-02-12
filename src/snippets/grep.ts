import { Snippet } from "./snippet";

export const grep: Snippet = {
  language: "grep",
  template: 'grep -P "%REGEX%" file.txt'
};
