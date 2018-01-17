import { isoTimestamp } from "./isoTimestamp";

describe("isoTimestamp", () => {
  it("recognizes iso timestamp", () => {
    const found = isoTimestamp.find("2020-03-12T13:34:56.123Z INFO")[0];
    expect(found.name).toBe("ISO timestamp");
    expect(found.pattern).toBe("\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(?:\\.\\d+)?Z?");
    expect("2020-03-12T13:34:56.123Z INFO".slice(found.start, found.end)).toBe(
      "2020-03-12T13:34:56.123Z"
    );
  });

  it("ignores unrelated text", () => {
    expect(isoTimestamp.find("no date").length).toBe(0);
  });
});
