import { shallow } from "enzyme";
import * as React from "react";
import { SampleInput } from "../components/SampleInput";
import { App } from "./App";
import { defaultSample } from "./defaultSample";

describe("App", () => {
  it("renders the title", () => {
    expect(
      shallow(<App />)
        .find(".app-title")
        .text()
    ).toBe("Regex Generator");
  });

  it("starts with the default sample text", () => {
    expect(
      shallow(<App />)
        .find(SampleInput)
        .prop("value")
    ).toBe(defaultSample);
  });

  it("updates the sample when the input changes", () => {
    const wrapper = shallow(<App />);
    wrapper.find(SampleInput).simulate("change", "new text");
    expect(wrapper.find(SampleInput).prop("value")).toBe("new text");
  });
});
