import { ipv4 } from "./ipv4";

describe("ipv4", () => {
  it("recognizes ipv4 address", () => {
    const found = ipv4.find("ip 10.0.0.1!")[0];
    expect(found.name).toBe("IPv4 address");
    expect(found.pattern).toBe("\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}");
    expect("ip 10.0.0.1!".slice(found.start, found.end)).toBe("10.0.0.1");
  });

  it("ignores unrelated text", () => {
    expect(ipv4.find("no ip").length).toBe(0);
  });
});
