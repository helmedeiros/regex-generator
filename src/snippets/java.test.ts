import { renderSnippet } from "./snippet";
import { java } from "./java";

describe("java", () => {
  it("names the language", () => {
    expect(java.language).toBe("Java");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(java, "\\d+")).toContain("\\d+");
  });
});
