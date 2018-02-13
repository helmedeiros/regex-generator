import { Snippet } from "./snippet";

export const java: Snippet = {
  language: "Java",
  template:
    'Pattern pattern = Pattern.compile("%REGEX%");\nMatcher matcher = pattern.matcher(text);'
};
