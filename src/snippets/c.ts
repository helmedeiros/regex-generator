import { Snippet } from "./snippet";

export const c: Snippet = {
  language: "C (regex.h)",
  template: 'regex_t regex;\nregcomp(&regex, "%REGEX%", REG_EXTENDED);'
};
