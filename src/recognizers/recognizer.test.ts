import { regexRecognizer } from "./recognizer";

describe("regexRecognizer", () => {
  it("finds every occurrence of the source", () => {
    const digits = regexRecognizer("digits", "\\d+");
    const matches = digits.find("a12 b345");
    expect(matches).toEqual([
      { start: 1, end: 3, name: "digits", pattern: "\\d+" },
      { start: 5, end: 8, name: "digits", pattern: "\\d+" }
    ]);
  });

  it("emits a distinct pattern when provided", () => {
    const hashtag = regexRecognizer("hashtag", "#\\w+", "#\\w+");
    expect(hashtag.find("#a")[0].pattern).toBe("#\\w+");
  });

  it("returns no matches for empty text", () => {
    expect(regexRecognizer("digits", "\\d+").find("")).toEqual([]);
  });
});
