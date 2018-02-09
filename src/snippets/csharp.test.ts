import { renderSnippet } from "./snippet";
import { csharp } from "./csharp";

describe("csharp", () => {
  it("names the language", () => {
    expect(csharp.language).toBe("C#");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(csharp, "\\d+")).toContain("\\d+");
  });
});
