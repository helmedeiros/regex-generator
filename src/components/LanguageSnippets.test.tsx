import { mount } from "enzyme";
import * as React from "react";
import { LanguageSnippets } from "./LanguageSnippets";

describe("LanguageSnippets", () => {
  it("lists every language once opened", () => {
    const wrapper = mount(<LanguageSnippets regex={"\\d+"} />);
    wrapper.find(".collapsible-toggle").simulate("click");
    expect(wrapper.find(".snippet-language").length).toBe(12);
  });

  it("shows the regex inside the snippet", () => {
    const wrapper = mount(<LanguageSnippets regex={"\\d+"} />);
    wrapper.find(".collapsible-toggle").simulate("click");
    expect(wrapper.find(".snippet-code").text()).toContain("\\d+");
  });

  it("switches the snippet when a language is picked", () => {
    const wrapper = mount(<LanguageSnippets regex={"\\d+"} />);
    wrapper.find(".collapsible-toggle").simulate("click");
    wrapper
      .find(".snippet-language")
      .filterWhere(node => node.text() === "Python")
      .simulate("click");
    expect(wrapper.find(".snippet-code").text()).toContain("re.compile");
  });
});
