import { renderSnippet } from "./snippet";
import { javascript } from "./javascript";

describe("javascript", () => {
  it("names the language", () => {
    expect(javascript.language).toBe("JavaScript");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(javascript, "\\d+")).toContain("\\d+");
  });
});
