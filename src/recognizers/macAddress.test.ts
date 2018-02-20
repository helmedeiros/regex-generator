import { macAddress } from "./macAddress";

describe("macAddress", () => {
  it("recognizes mac address", () => {
    const found = macAddress.find("mac 01:23:45:67:89:ab end")[0];
    expect(found.name).toBe("MAC address");
    expect(found.pattern).toBe("(?:[0-9a-fA-F]{2}:){5}[0-9a-fA-F]{2}");
    expect("mac 01:23:45:67:89:ab end".slice(found.start, found.end)).toBe("01:23:45:67:89:ab");
  });

  it("ignores unrelated text", () => {
    expect(macAddress.find("no mac").length).toBe(0);
  });
});
