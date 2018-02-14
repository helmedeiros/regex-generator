import { renderSnippet } from "./snippet";
import { php } from "./php";

describe("php", () => {
  it("names the language", () => {
    expect(php.language).toBe("PHP");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(php, "\\d+")).toContain("\\d+");
  });
});
