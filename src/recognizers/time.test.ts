import { time } from "./time";

describe("time", () => {
  it("recognizes time", () => {
    const found = time.find("at 13:34:56 now")[0];
    expect(found.name).toBe("Time");
    expect(found.pattern).toBe("\\d{2}:\\d{2}:\\d{2}");
    expect("at 13:34:56 now".slice(found.start, found.end)).toBe("13:34:56");
  });

  it("ignores unrelated text", () => {
    expect(time.find("no time").length).toBe(0);
  });
});
