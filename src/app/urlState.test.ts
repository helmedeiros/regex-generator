import { decodeSample, encodeSample } from "./urlState";

describe("url state", () => {
  it("round trips a sample through the hash", () => {
    const sample = "a b #tag 'value'";
    expect(decodeSample(encodeSample(sample))).toBe(sample);
  });

  it("encodes special characters", () => {
    expect(encodeSample("a b")).toBe("#text=a%20b");
  });

  it("returns null for an unrelated hash", () => {
    expect(decodeSample("#other=1")).toBeNull();
  });

  it("returns null for an empty hash", () => {
    expect(decodeSample("")).toBeNull();
  });
});
