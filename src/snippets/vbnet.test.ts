import { renderSnippet } from "./snippet";
import { vbnet } from "./vbnet";

describe("vbnet", () => {
  it("names the language", () => {
    expect(vbnet.language).toBe("Visual Basic .NET");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(vbnet, "\\d+")).toContain("\\d+");
  });
});
