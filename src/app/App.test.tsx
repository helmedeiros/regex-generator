import { shallow } from "enzyme";
import * as React from "react";
import { OptionsPanel } from "../components/OptionsPanel";
import { RegexOutput } from "../components/RegexOutput";
import { SampleInput } from "../components/SampleInput";
import { Suggestions } from "../components/Suggestions";
import { buildRegexFromMatches } from "../regex/regexFromMatches";
import { SuggestionBox } from "../suggestions/layout";
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

  it("shows a hint for the sample step", () => {
    expect(shallow(<App />).find(".sample-hint").length).toBe(1);
  });

  it("shows a hint for the suggestions step", () => {
    expect(shallow(<App />).find(".suggestions-hint").length).toBe(1);
  });

  it("shows suggestions for the sample", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Suggestions).length).toBe(1);
    const boxes = wrapper.find(Suggestions).prop("boxes") as SuggestionBox[];
    expect(boxes.length).toBeGreaterThan(0);
  });

  it("shows the escaped sample as the initial regex", () => {
    expect(
      shallow(<App />)
        .find(RegexOutput)
        .prop("regex")
    ).toBe(buildRegexFromMatches(defaultSample, []));
  });

  it("renders the options panel", () => {
    expect(shallow(<App />).find(OptionsPanel).length).toBe(1);
  });

  it("anchors the regex when whole line is enabled", () => {
    const wrapper = shallow(<App />);
    wrapper.find(OptionsPanel).simulate("change", {
      caseInsensitive: false,
      wholeLine: true,
      global: false
    });
    const regex = wrapper.find(RegexOutput).prop("regex") as string;
    expect(regex.charAt(0)).toBe("^");
    expect(regex.charAt(regex.length - 1)).toBe("$");
  });
});
