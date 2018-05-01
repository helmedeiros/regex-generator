import { ipv6 } from "./ipv6";

describe("ipv6", () => {
  it("recognizes ipv6 address", () => {
    const found = ipv6.find("ip 2001:0db8:0000:0000:0000:ff00:0042:8329 end")[0];
    expect(found.name).toBe("IPv6 address");
    expect(found.pattern).toBe("(?:[0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}");
    expect("ip 2001:0db8:0000:0000:0000:ff00:0042:8329 end".slice(found.start, found.end)).toBe(
      "2001:0db8:0000:0000:0000:ff00:0042:8329"
    );
  });

  it("ignores unrelated text", () => {
    expect(ipv6.find("no ipv6").length).toBe(0);
  });
});
