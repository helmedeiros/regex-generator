import { Snippet } from "./snippet";

export const python: Snippet = {
  language: "Python",
  template: 'import re\n\nregex = re.compile(r"%REGEX%")\nmatch = regex.search(text)'
};
