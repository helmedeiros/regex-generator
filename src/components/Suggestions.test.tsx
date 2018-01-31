import { shallow } from "enzyme";
import * as React from "react";
import { createMatch } from "../regex/match";
import { layoutSuggestions } from "../suggestions/layout";
import { Suggestions } from "./Suggestions";
import { SuggestionBoxView } from "./SuggestionBoxView";

describe("Suggestions", () => {
  const boxes = layoutSuggestions([createMatch(0, 4, "a", "a"), createMatch(2, 6, "b", "b")]);

  it("shows the sample text", () => {
    expect(
      shallow(<Suggestions text="hello" boxes={boxes} selected={[]} onSelect={jest.fn()} />)
        .find(".suggestions-text")
        .text()
    ).toBe("hello");
  });

  it("renders one box view per suggestion", () => {
    expect(
      shallow(<Suggestions text="hello" boxes={boxes} selected={[]} onSelect={jest.fn()} />).find(
        SuggestionBoxView
      ).length
    ).toBe(2);
  });

  it("marks the selected box", () => {
    const wrapper = shallow(
      <Suggestions text="hello" boxes={boxes} selected={[boxes[0].match]} onSelect={jest.fn()} />
    );
    const selectedFlags = wrapper.find(SuggestionBoxView).map(node => node.prop("selected"));
    expect(selectedFlags).toContain(true);
  });
});
