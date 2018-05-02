import { md5 } from "./md5";

describe("md5", () => {
  it("recognizes md5 hash", () => {
    const found = md5.find("h d41d8cd98f00b204e9800998ecf8427e end")[0];
    expect(found.name).toBe("MD5 hash");
    expect(found.pattern).toBe("\\b[0-9a-f]{32}\\b");
    expect("h d41d8cd98f00b204e9800998ecf8427e end".slice(found.start, found.end)).toBe(
      "d41d8cd98f00b204e9800998ecf8427e"
    );
  });

  it("ignores unrelated text", () => {
    expect(md5.find("no hash").length).toBe(0);
  });
});
