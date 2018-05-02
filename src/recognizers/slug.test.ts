import { slug } from "./slug";

describe("slug", () => {
  it("recognizes slug", () => {
    const found = slug.find("post my-blog-post here")[0];
    expect(found.name).toBe("Slug");
    expect(found.pattern).toBe("[a-z0-9]+(?:-[a-z0-9]+)+");
    expect("post my-blog-post here".slice(found.start, found.end)).toBe("my-blog-post");
  });

  it("ignores unrelated text", () => {
    expect(slug.find("nodashes").length).toBe(0);
  });
});
