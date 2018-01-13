import { hashtag } from "./hashtag";

describe("hashtag", () => {
  it("recognizes hashtag", () => {
    const found = hashtag.find("a #tag b")[0];
    expect(found.name).toBe("Hashtag");
    expect(found.pattern).toBe("#\\w+");
    expect("a #tag b".slice(found.start, found.end)).toBe("#tag");
  });

  it("ignores unrelated text", () => {
    expect(hashtag.find("no tags").length).toBe(0);
  });
});
