export interface Snippet {
  language: string;
  template: string;
}

export function renderSnippet(snippet: Snippet, regex: string): string {
  return snippet.template.split("%REGEX%").join(regex);
}
