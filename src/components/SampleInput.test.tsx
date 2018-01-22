import { shallow } from "enzyme";
import * as React from "react";
import { SampleInput } from "./SampleInput";

describe("SampleInput", () => {
  it("shows the current value", () => {
    const wrapper = shallow(<SampleInput value="hello" onChange={jest.fn()} />);
    expect(wrapper.find(".sample-input").prop("value")).toBe("hello");
  });

  it("reports edits through onChange", () => {
    const onChange = jest.fn();
    const wrapper = shallow(<SampleInput value="a" onChange={onChange} />);
    wrapper.find(".sample-input").simulate("change", { target: { value: "b" } });
    expect(onChange).toBeCalledWith("b");
  });
});
