import { booleanWord } from "./booleanWord";

describe("booleanWord", () => {
  it("recognizes boolean", () => {
    const found = booleanWord.find("flag true set")[0];
    expect(found.name).toBe("Boolean");
    expect(found.pattern).toBe("(?:true|false)");
    expect("flag true set".slice(found.start, found.end)).toBe("true");
  });

  it("ignores unrelated text", () => {
    expect(booleanWord.find("no bool").length).toBe(0);
  });
});
