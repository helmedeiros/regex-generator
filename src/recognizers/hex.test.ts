import { hex } from "./hex";

describe("hex", () => {
  it("recognizes hex number", () => {
    const found = hex.find("v 0x1F end")[0];
    expect(found.name).toBe("Hex number");
    expect(found.pattern).toBe("0x[0-9a-fA-F]+");
    expect("v 0x1F end".slice(found.start, found.end)).toBe("0x1F");
  });

  it("ignores unrelated text", () => {
    expect(hex.find("no hex").length).toBe(0);
  });
});
