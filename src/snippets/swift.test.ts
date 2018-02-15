import { renderSnippet } from "./snippet";
import { swift } from "./swift";

describe("swift", () => {
  it("names the language", () => {
    expect(swift.language).toBe("Swift");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(swift, "\\d+")).toContain("\\d+");
  });
});
