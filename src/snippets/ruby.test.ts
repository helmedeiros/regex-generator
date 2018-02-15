import { renderSnippet } from "./snippet";
import { ruby } from "./ruby";

describe("ruby", () => {
  it("names the language", () => {
    expect(ruby.language).toBe("Ruby");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(ruby, "\\d+")).toContain("\\d+");
  });
});
