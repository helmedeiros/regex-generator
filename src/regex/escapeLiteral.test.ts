import { escapeLiteral } from "./escapeLiteral";

describe("escapeLiteral", () => {
  it("escapes a single metacharacter", () => {
    expect(escapeLiteral("a.b")).toBe("a\\.b");
  });

  it("escapes brackets and dots in a class name", () => {
    expect(escapeLiteral("[org.example.Class]")).toBe("\\[org\\.example\\.Class\\]");
  });

  it("escapes quantifiers and anchors", () => {
    expect(escapeLiteral("a+b*c^d$")).toBe("a\\+b\\*c\\^d\\$");
  });

  it("leaves plain words untouched", () => {
    expect(escapeLiteral("value")).toBe("value");
  });

  it("returns an empty string unchanged", () => {
    expect(escapeLiteral("")).toBe("");
  });
});
