import { renderSnippet } from "./snippet";
import { kotlin } from "./kotlin";

describe("kotlin", () => {
  it("names the language", () => {
    expect(kotlin.language).toBe("Kotlin");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(kotlin, "\\d+")).toContain("\\d+");
  });
});
