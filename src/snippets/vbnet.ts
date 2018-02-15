import { Snippet } from "./snippet";

export const vbnet: Snippet = {
  language: "Visual Basic .NET",
  template: 'Dim regex As New Regex("%REGEX%")\nDim match = regex.Match(text)'
};
