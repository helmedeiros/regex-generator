import { palette } from "./palette";

describe("palette", () => {
  it("has four brand colors", () => {
    expect(palette.length).toBe(4);
  });

  it("uses hex colors", () => {
    for (const color of palette) {
      expect(color).toMatch(/^#[0-9a-f]{6}$/);
    }
  });
});
