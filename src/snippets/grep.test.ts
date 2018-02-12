import { renderSnippet } from "./snippet";
import { grep } from "./grep";

describe("grep", () => {
  it("names the language", () => {
    expect(grep.language).toBe("grep");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(grep, "\\d+")).toContain("\\d+");
  });
});
