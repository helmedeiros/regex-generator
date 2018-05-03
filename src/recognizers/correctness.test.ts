import { defaultSample } from "../app/defaultSample";
import { recognize } from "./recognize";

describe("recognizer correctness", () => {
  it("every match pattern matches the text it covers", () => {
    for (const match of recognize(defaultSample)) {
      const covered = defaultSample.slice(match.start, match.end);
      expect(new RegExp(match.pattern).test(covered)).toBe(true);
    }
  });

  it("finds a variety of patterns in the sample", () => {
    const names = recognize(defaultSample).map(match => match.name);
    expect(names).toContain("ISO timestamp");
    expect(names).toContain("Log level");
    expect(names).toContain("Hashtag");
    expect(names).toContain("Single quoted");
  });
});
