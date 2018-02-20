import { currency } from "./currency";

describe("currency", () => {
  it("recognizes currency amount", () => {
    const found = currency.find("cost $10.50 now")[0];
    expect(found.name).toBe("Currency amount");
    expect(found.pattern).toBe("[$€£]\\d+(?:\\.\\d{2})?");
    expect("cost $10.50 now".slice(found.start, found.end)).toBe("$10.50");
  });

  it("ignores unrelated text", () => {
    expect(currency.find("no money").length).toBe(0);
  });
});
