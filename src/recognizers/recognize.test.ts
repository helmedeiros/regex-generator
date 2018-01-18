import { recognize } from "./recognize";

describe("recognize", () => {
  const sample = "2020-03-12T13:34:56.123Z INFO [org.example.Class]: This is a #simple line.";

  it("finds candidate matches across recognizers", () => {
    const names = recognize(sample).map(match => match.name);
    expect(names).toContain("ISO timestamp");
    expect(names).toContain("Log level");
    expect(names).toContain("Hashtag");
  });

  it("returns an empty list for empty text", () => {
    expect(recognize("")).toEqual([]);
  });

  it("only uses the recognizers it is given", () => {
    const matches = recognize(sample, []);
    expect(matches).toEqual([]);
  });
});
