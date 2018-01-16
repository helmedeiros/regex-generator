import { email } from "./email";

describe("email", () => {
  it("recognizes email", () => {
    const found = email.find("to a.b@ex.com!")[0];
    expect(found.name).toBe("Email");
    expect(found.pattern).toBe("[\\w.+-]+@[\\w-]+\\.[\\w.-]+");
    expect("to a.b@ex.com!".slice(found.start, found.end)).toBe("a.b@ex.com");
  });

  it("ignores unrelated text", () => {
    expect(email.find("no mail").length).toBe(0);
  });
});
