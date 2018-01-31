import { shallow } from "enzyme";
import * as React from "react";
import { RegexOutput } from "./RegexOutput";

describe("RegexOutput", () => {
  it("shows the regular expression", () => {
    expect(
      shallow(<RegexOutput regex={"\\d+"} />)
        .find(".regex-output-value")
        .text()
    ).toBe("\\d+");
  });
});
