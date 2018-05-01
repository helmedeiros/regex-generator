import { mount, shallow } from "enzyme";
import * as React from "react";
import { LanguageSnippets } from "../components/LanguageSnippets";
import { OptionsPanel } from "../components/OptionsPanel";
import { RegexOutput } from "../components/RegexOutput";
import { RegexPreview } from "../components/RegexPreview";
import { SampleInput } from "../components/SampleInput";
import { Suggestions } from "../components/Suggestions";
import { Tour } from "../components/Tour";
import { buildRegexFromMatches } from "../regex/regexFromMatches";
import { SuggestionBox } from "../suggestions/layout";
import { App } from "./App";
import { defaultSample } from "./defaultSample";
import { encodeSample } from "./urlState";

describe("App", () => {
  afterEach(() => {
    window.location.hash = "";
  });

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

  it("restores the sample from the url", () => {
    window.location.hash = encodeSample("hello world");
    expect(
      shallow(<App />)
        .find(SampleInput)
        .prop("value")
    ).toBe("hello world");
  });

  it("updates the sample when the input changes", () => {
    const wrapper = shallow(<App />);
    wrapper.find(SampleInput).simulate("change", "new text");
    expect(wrapper.find(SampleInput).prop("value")).toBe("new text");
  });

  it("stores the sample in the url when it changes", () => {
    const wrapper = mount(<App />);
    wrapper.find("input.sample-input").simulate("change", { target: { value: "abc" } });
    expect(window.location.hash).toBe(encodeSample("abc"));
  });

  it("shows a hint for the sample step", () => {
    expect(shallow(<App />).find(".sample-hint").length).toBe(1);
  });

  it("resets the sample to the default", () => {
    const wrapper = shallow(<App />);
    wrapper.find(SampleInput).simulate("change", "changed");
    wrapper.find(".reset-sample").simulate("click");
    expect(wrapper.find(SampleInput).prop("value")).toBe(defaultSample);
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

  it("renders the language snippets", () => {
    expect(shallow(<App />).find(LanguageSnippets).length).toBe(1);
  });

  it("opens the tour on start", () => {
    expect(shallow(<App />).find(Tour).length).toBe(1);
  });

  it("labels the help button for assistive tech", () => {
    expect(
      shallow(<App />)
        .find(".help-button")
        .prop("aria-label")
    ).toBe("Open the introduction");
  });

  it("closes the tour", () => {
    const wrapper = shallow(<App />);
    wrapper.find(Tour).simulate("close");
    expect(wrapper.find(Tour).length).toBe(0);
  });

  it("clears the selection", () => {
    const wrapper = shallow(<App />);
    const box = (wrapper.find(Suggestions).prop("boxes") as SuggestionBox[])[0];
    wrapper.find(Suggestions).simulate("select", box);
    wrapper.find(".clear-selection").simulate("click");
    expect(wrapper.find(Suggestions).prop("selected")).toEqual([]);
  });

  it("previews matches of the generated regex on the sample", () => {
    const ranges = shallow(<App />)
      .find(RegexPreview)
      .prop("ranges") as Array<{ start: number; end: number }>;
    expect(ranges.length).toBeGreaterThan(0);
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
