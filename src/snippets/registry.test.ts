import { snippets } from "./registry";

describe("snippets", () => {
  it("lists all supported languages", () => {
    expect(snippets.length).toBe(12);
  });

  it("includes JavaScript", () => {
    expect(snippets.map(snippet => snippet.language)).toContain("JavaScript");
  });
});
