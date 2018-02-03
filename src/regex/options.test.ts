import { defaultOptions, flagsFor } from "./options";

describe("regex options", () => {
  it("defaults to no options", () => {
    expect(defaultOptions).toEqual({
      caseInsensitive: false,
      wholeLine: false,
      global: false
    });
  });

  it("builds no flags by default", () => {
    expect(flagsFor(defaultOptions)).toBe("");
  });

  it("adds the global flag", () => {
    expect(flagsFor({ ...defaultOptions, global: true })).toBe("g");
  });

  it("adds the case insensitive flag", () => {
    expect(flagsFor({ ...defaultOptions, caseInsensitive: true })).toBe("i");
  });

  it("orders global before case insensitive", () => {
    expect(flagsFor({ caseInsensitive: true, wholeLine: false, global: true })).toBe("gi");
  });
});
