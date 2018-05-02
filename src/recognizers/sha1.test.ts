import { sha1 } from "./sha1";

describe("sha1", () => {
  it("recognizes sha-1 hash", () => {
    const found = sha1.find("h da39a3ee5e6b4b0d3255bfef95601890afd80709 end")[0];
    expect(found.name).toBe("SHA-1 hash");
    expect(found.pattern).toBe("\\b[0-9a-f]{40}\\b");
    expect("h da39a3ee5e6b4b0d3255bfef95601890afd80709 end".slice(found.start, found.end)).toBe(
      "da39a3ee5e6b4b0d3255bfef95601890afd80709"
    );
  });

  it("ignores unrelated text", () => {
    expect(sha1.find("no hash").length).toBe(0);
  });
});
