import { htmlTag } from "./htmlTag";

describe("htmlTag", () => {
  it("recognizes html tag", () => {
    const found = htmlTag.find("text <div> here")[0];
    expect(found.name).toBe("HTML tag");
    expect(found.pattern).toBe("</?[a-zA-Z][^>]*>");
    expect("text <div> here".slice(found.start, found.end)).toBe("<div>");
  });

  it("ignores unrelated text", () => {
    expect(htmlTag.find("no tag").length).toBe(0);
  });
});
