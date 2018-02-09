import { Snippet } from "./snippet";

export const csharp: Snippet = {
  language: "C#",
  template: 'var regex = new Regex("%REGEX%");\nvar match = regex.Match(text);'
};
