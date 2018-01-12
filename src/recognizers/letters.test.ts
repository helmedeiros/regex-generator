import { letters } from "./letters";

describe("letters", () => {
  it("recognizes letters", () => {
    const found = letters.find("ab12")[0];
    expect(found.name).toBe("Letters");
    expect(found.pattern).toBe("[A-Za-z]+");
    expect("ab12".slice(found.start, found.end)).toBe("ab");
  });

  it("ignores unrelated text", () => {
    expect(letters.find("123").length).toBe(0);
  });
});
