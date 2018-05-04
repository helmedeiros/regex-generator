import { shallow } from "enzyme";
import * as React from "react";
import { createMatch } from "../regex/match";
import { SuggestionBox } from "../suggestions/layout";
import { SuggestionBoxView } from "./SuggestionBoxView";

const box: SuggestionBox = {
  match: createMatch(2, 5, "Word", "\\w+"),
  row: 1,
  left: 2,
  width: 3,
  color: "#0f9d58"
};

describe("SuggestionBoxView", () => {
  it("names the recognizer through the title", () => {
    expect(
      shallow(<SuggestionBoxView box={box} selected={false} onSelect={jest.fn()} />)
        .find(".suggestion-box")
        .prop("title")
    ).toBe("Word");
  });

  it("marks selected boxes with a class", () => {
    const className = shallow(<SuggestionBoxView box={box} selected={true} onSelect={jest.fn()} />)
      .find("div")
      .prop("className");
    expect(className).toContain("suggestion-box-selected");
  });

  it("reports selection on click", () => {
    const onSelect = jest.fn();
    shallow(<SuggestionBoxView box={box} selected={false} onSelect={onSelect} />)
      .find(".suggestion-box")
      .simulate("click");
    expect(onSelect).toBeCalledWith(box);
  });

  it("labels the box for assistive tech", () => {
    expect(
      shallow(<SuggestionBoxView box={box} selected={false} onSelect={jest.fn()} />)
        .find(".suggestion-box")
        .prop("aria-label")
    ).toBe("Word");
  });

  it("selects on the enter key", () => {
    const onSelect = jest.fn();
    shallow(<SuggestionBoxView box={box} selected={false} onSelect={onSelect} />)
      .find(".suggestion-box")
      .simulate("keypress", { key: "Enter" });
    expect(onSelect).toBeCalledWith(box);
  });
});
