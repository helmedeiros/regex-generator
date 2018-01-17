import { uuid } from "./uuid";

describe("uuid", () => {
  it("recognizes uuid", () => {
    const found = uuid.find("id 123e4567-e89b-12d3-a456-426614174000!")[0];
    expect(found.name).toBe("UUID");
    expect(found.pattern).toBe(
      "[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}"
    );
    expect("id 123e4567-e89b-12d3-a456-426614174000!".slice(found.start, found.end)).toBe(
      "123e4567-e89b-12d3-a456-426614174000"
    );
  });

  it("ignores unrelated text", () => {
    expect(uuid.find("no uuid").length).toBe(0);
  });
});
