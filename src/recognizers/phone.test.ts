import { phone } from "./phone";

describe("phone", () => {
  it("recognizes phone number", () => {
    const found = phone.find("call +123456789 now")[0];
    expect(found.name).toBe("Phone number");
    expect(found.pattern).toBe("\\+?\\d[\\d-]{6,}\\d");
    expect("call +123456789 now".slice(found.start, found.end)).toBe("+123456789");
  });

  it("ignores unrelated text", () => {
    expect(phone.find("no phone").length).toBe(0);
  });
});
