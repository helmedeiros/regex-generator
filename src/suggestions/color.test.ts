import { colorFor, paletteSize } from "./color";

describe("colorFor", () => {
  it("returns the same color for the same name", () => {
    expect(colorFor("Hashtag")).toBe(colorFor("Hashtag"));
  });

  it("returns a color from the palette", () => {
    const palette = ["#db4437", "#0f9d58", "#4285f4", "#f4b400"];
    expect(palette).toContain(colorFor("Number"));
  });

  it("exposes the palette size", () => {
    expect(paletteSize()).toBe(4);
  });
});
