import { digits } from "./digits";

describe("digits", () => {
  it("matches runs of digits", () => {
    expect(digits.find("port 8080")).toEqual([
      { start: 5, end: 9, name: "Number", pattern: "\\d+" }
    ]);
  });

  it("finds several numbers", () => {
    expect(digits.find("1 and 22").length).toBe(2);
  });

  it("ignores text without digits", () => {
    expect(digits.find("no numbers here")).toEqual([]);
  });
});
