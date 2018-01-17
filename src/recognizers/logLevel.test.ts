import { logLevel } from "./logLevel";

describe("logLevel", () => {
  it("recognizes log level", () => {
    const found = logLevel.find("[INFO] ok")[0];
    expect(found.name).toBe("Log level");
    expect(found.pattern).toBe("(?:TRACE|DEBUG|INFO|WARN|ERROR)");
    expect("[INFO] ok".slice(found.start, found.end)).toBe("INFO");
  });

  it("ignores unrelated text", () => {
    expect(logLevel.find("lowercase info").length).toBe(0);
  });
});
