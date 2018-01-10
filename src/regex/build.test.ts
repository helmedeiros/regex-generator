import { buildRegex } from "./build";
import { literal, pattern } from "./segment";

describe("buildRegex", () => {
  it("escapes literal segments", () => {
    expect(buildRegex([literal("a.b")])).toBe("a\\.b");
  });

  it("keeps pattern segments verbatim", () => {
    expect(buildRegex([pattern("\\d+")])).toBe("\\d+");
  });

  it("joins mixed segments in order", () => {
    expect(buildRegex([literal("id="), pattern("\\d+"), literal(".")])).toBe("id=\\d+\\.");
  });

  it("returns an empty string for no segments", () => {
    expect(buildRegex([])).toBe("");
  });
});
