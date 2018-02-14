import { renderSnippet } from "./snippet";
import { python } from "./python";

describe("python", () => {
  it("names the language", () => {
    expect(python.language).toBe("Python");
  });

  it("embeds the regex", () => {
    expect(renderSnippet(python, "\\d+")).toContain("\\d+");
  });
});
