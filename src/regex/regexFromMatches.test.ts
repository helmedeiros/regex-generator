import { createMatch } from "./match";
import { buildRegexFromMatches } from "./regexFromMatches";

describe("buildRegexFromMatches", () => {
  it("escapes a fully literal sample", () => {
    const text = "[org.example.Class]";
    expect(buildRegexFromMatches(text, [])).toBe("\\[org\\.example\\.Class\\]");
  });

  it("replaces a selected range with its pattern", () => {
    const text = "id=42.";
    const regex = buildRegexFromMatches(text, [createMatch(3, 5, "digits", "\\d+")]);
    expect(regex).toBe("id=\\d+\\.");
  });

  it("produces a regex that matches the original text", () => {
    const text = "user-7 logged in";
    const regex = buildRegexFromMatches(text, [
      createMatch(0, 4, "word", "\\w+"),
      createMatch(5, 6, "digit", "\\d")
    ]);
    expect(new RegExp(regex).test(text)).toBe(true);
  });
});
