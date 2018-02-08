import { shallow } from "enzyme";
import * as React from "react";
import { RegexOutput } from "./RegexOutput";

describe("RegexOutput", () => {
  it("shows the regular expression", () => {
    expect(
      shallow(<RegexOutput regex={"\\d+"} onCopy={jest.fn()} />)
        .find(".regex-output-value")
        .text()
    ).toBe("\\d+");
  });

  it("copies on button click", () => {
    const onCopy = jest.fn();
    shallow(<RegexOutput regex={"\\d+"} onCopy={onCopy} />)
      .find(".regex-copy")
      .simulate("click");
    expect(onCopy).toBeCalled();
  });
});
