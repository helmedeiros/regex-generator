import { scientific } from "./scientific";

describe("scientific", () => {
  it("recognizes scientific notation", () => {
    const found = scientific.find("n 6.02e23 mol")[0];
    expect(found.name).toBe("Scientific notation");
    expect(found.pattern).toBe("-?\\d+(?:\\.\\d+)?[eE][+-]?\\d+");
    expect("n 6.02e23 mol".slice(found.start, found.end)).toBe("6.02e23");
  });

  it("ignores unrelated text", () => {
    expect(scientific.find("no sci").length).toBe(0);
  });
});
