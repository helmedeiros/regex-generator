import { date } from "./date";

describe("date", () => {
  it("recognizes date", () => {
    const found = date.find("on 2020-03-12 ok")[0];
    expect(found.name).toBe("Date");
    expect(found.pattern).toBe("\\d{4}-\\d{2}-\\d{2}");
    expect("on 2020-03-12 ok".slice(found.start, found.end)).toBe("2020-03-12");
  });

  it("ignores unrelated text", () => {
    expect(date.find("no date").length).toBe(0);
  });
});
