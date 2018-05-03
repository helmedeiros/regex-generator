import { defaultRecognizers } from "./registry";

describe("defaultRecognizers", () => {
  it("lists every built-in recognizer", () => {
    expect(defaultRecognizers.length).toBe(32);
  });

  it("exposes a name and a find function for each", () => {
    for (const recognizer of defaultRecognizers) {
      expect(typeof recognizer.name).toBe("string");
      expect(typeof recognizer.find).toBe("function");
    }
  });
});
