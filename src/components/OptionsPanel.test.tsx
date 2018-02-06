import { mount } from "enzyme";
import * as React from "react";
import { defaultOptions } from "../regex/options";
import { OptionsPanel } from "./OptionsPanel";

describe("OptionsPanel", () => {
  it("shows the options once opened", () => {
    const wrapper = mount(<OptionsPanel options={defaultOptions} onChange={jest.fn()} />);
    wrapper.find(".collapsible-toggle").simulate("click");
    expect(wrapper.find('input[type="checkbox"]').length).toBe(3);
  });

  it("reports a toggled option", () => {
    const onChange = jest.fn();
    const wrapper = mount(<OptionsPanel options={defaultOptions} onChange={onChange} />);
    wrapper.find(".collapsible-toggle").simulate("click");
    wrapper
      .find('input[type="checkbox"]')
      .at(0)
      .simulate("change", { target: { checked: true } });
    expect(onChange).toBeCalledWith({ ...defaultOptions, caseInsensitive: true });
  });
});
