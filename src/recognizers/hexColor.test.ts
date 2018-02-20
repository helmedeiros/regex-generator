import { hexColor } from "./hexColor";

describe("hexColor", () => {
  it("recognizes hex color", () => {
    const found = hexColor.find("color #ffcc00 here")[0];
    expect(found.name).toBe("Hex color");
    expect(found.pattern).toBe("#[0-9a-fA-F]{6}");
    expect("color #ffcc00 here".slice(found.start, found.end)).toBe("#ffcc00");
  });

  it("ignores unrelated text", () => {
    expect(hexColor.find("no color").length).toBe(0);
  });
});
