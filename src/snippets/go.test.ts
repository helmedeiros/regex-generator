import { renderSnippet } from "./snippet";
import { go } from "./go";

describe("go", () => {
  it("names the language", () => {
    expect(go.language).toBe("Go");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(go, "\\d+")).toContain("\\d+");
  });
});
