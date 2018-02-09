import { renderSnippet, Snippet } from "./snippet";

describe("renderSnippet", () => {
  const snippet: Snippet = {
    language: "Test",
    template: "value = /%REGEX%/"
  };

  it("replaces the placeholder with the regex", () => {
    expect(renderSnippet(snippet, "\\d+")).toBe("value = /\\d+/");
  });

  it("replaces every placeholder occurrence", () => {
    expect(renderSnippet({ language: "Test", template: "%REGEX% %REGEX%" }, "a")).toBe("a a");
  });
});
