import { Snippet } from "./snippet";

export const php: Snippet = {
  language: "PHP",
  template: "<?php\npreg_match('/%REGEX%/', $text, $matches);"
};
