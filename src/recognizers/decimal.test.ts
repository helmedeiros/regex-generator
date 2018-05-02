import { decimal } from "./decimal";

describe("decimal", () => {
  it("recognizes decimal number", () => {
    const found = decimal.find("pi 3.14 approx")[0];
    expect(found.name).toBe("Decimal number");
    expect(found.pattern).toBe("-?\\d+\\.\\d+");
    expect("pi 3.14 approx".slice(found.start, found.end)).toBe("3.14");
  });

  it("ignores unrelated text", () => {
    expect(decimal.find("no decimal").length).toBe(0);
  });
});
