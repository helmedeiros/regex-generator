import { defaultSample } from "./defaultSample";

describe("defaultSample", () => {
  it("is a non-empty example line", () => {
    expect(defaultSample.length).toBeGreaterThan(0);
  });

  it("contains recognizable tokens", () => {
    expect(defaultSample).toContain("INFO");
    expect(defaultSample).toContain("#simple");
  });
});
