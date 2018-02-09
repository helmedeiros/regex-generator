import { renderSnippet } from "./snippet";
import { c } from "./c";

describe("c", () => {
  it("names the language", () => {
    expect(c.language).toBe("C (regex.h)");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(c, "\\d+")).toContain("\\d+");
  });
});
