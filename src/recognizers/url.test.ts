import { url } from "./url";

describe("url", () => {
  it("recognizes url", () => {
    const found = url.find("see http://x.io now")[0];
    expect(found.name).toBe("URL");
    expect(found.pattern).toBe("https?://[^\\s]+");
    expect("see http://x.io now".slice(found.start, found.end)).toBe("http://x.io");
  });

  it("ignores unrelated text", () => {
    expect(url.find("no url").length).toBe(0);
  });
});
