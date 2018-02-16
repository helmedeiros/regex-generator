import { tourSteps } from "./tour";

describe("tourSteps", () => {
  it("walks through the four stages", () => {
    expect(tourSteps.map(step => step.title)).toEqual([
      "Sample",
      "Recognition",
      "Result",
      "Language snippets"
    ]);
  });

  it("gives every step a body", () => {
    for (const step of tourSteps) {
      expect(step.body.length).toBeGreaterThan(0);
    }
  });
});
