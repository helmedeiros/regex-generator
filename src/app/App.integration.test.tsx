import { mount } from "enzyme";
import * as React from "react";
import { App } from "./App";

describe("App integration", () => {
  it("renders all three steps and the snippets", () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(".step").length).toBe(3);
    expect(wrapper.find(".snippets-block").length).toBe(1);
  });

  it("regenerates the regex when a suggestion is selected", () => {
    const wrapper = mount(<App />);
    wrapper.find(".tour-close").simulate("click");
    const before = wrapper.find(".regex-output-value").text();
    wrapper
      .find(".suggestion-box")
      .first()
      .simulate("click");
    const after = wrapper.find(".regex-output-value").text();
    expect(after).not.toBe(before);
  });
});
