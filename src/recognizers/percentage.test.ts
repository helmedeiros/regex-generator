import { percentage } from "./percentage";

describe("percentage", () => {
  it("recognizes percentage", () => {
    const found = percentage.find("up 12.5% today")[0];
    expect(found.name).toBe("Percentage");
    expect(found.pattern).toBe("\\d+(?:\\.\\d+)?%");
    expect("up 12.5% today".slice(found.start, found.end)).toBe("12.5%");
  });

  it("ignores unrelated text", () => {
    expect(percentage.find("no percent").length).toBe(0);
  });
});
