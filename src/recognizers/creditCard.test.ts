import { creditCard } from "./creditCard";

describe("creditCard", () => {
  it("recognizes credit card", () => {
    const found = creditCard.find("card 1234 5678 9012 3456 end")[0];
    expect(found.name).toBe("Credit card");
    expect(found.pattern).toBe("\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}");
    expect("card 1234 5678 9012 3456 end".slice(found.start, found.end)).toBe(
      "1234 5678 9012 3456"
    );
  });

  it("ignores unrelated text", () => {
    expect(creditCard.find("no card").length).toBe(0);
  });
});
