import { word } from "./word";

describe("word", () => {
  it("recognizes word", () => {
    const found = word.find("a_1 b")[0];
    expect(found.name).toBe("Word");
    expect(found.pattern).toBe("\\w+");
    expect("a_1 b".slice(found.start, found.end)).toBe("a_1");
  });

  it("ignores unrelated text", () => {
    expect(word.find("  ").length).toBe(0);
  });
});
