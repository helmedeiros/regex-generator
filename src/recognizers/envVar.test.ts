import { envVar } from "./envVar";

describe("envVar", () => {
  it("recognizes environment variable", () => {
    const found = envVar.find("path $HOME/bin")[0];
    expect(found.name).toBe("Environment variable");
    expect(found.pattern).toBe("\\$[A-Z_][A-Z0-9_]*");
    expect("path $HOME/bin".slice(found.start, found.end)).toBe("$HOME");
  });

  it("ignores unrelated text", () => {
    expect(envVar.find("no var").length).toBe(0);
  });
});
