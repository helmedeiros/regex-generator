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
      shallow(<SuggestionBoxView box={box} onSelect={jest.fn()} />)
        .find(".suggestion-box")
        .prop("title")
    ).toBe("Word");
  });

  it("positions the box by column and row", () => {
    const style = shallow(<SuggestionBoxView box={box} onSelect={jest.fn()} />)
      .find(".suggestion-box")
      .prop("style") as React.CSSProperties;
    expect(style.left).toBe("2ch");
    expect(style.width).toBe("3ch");
  });

  it("reports selection on click", () => {
    const onSelect = jest.fn();
    shallow(<SuggestionBoxView box={box} onSelect={onSelect} />)
      .find(".suggestion-box")
      .simulate("click");
    expect(onSelect).toBeCalledWith(box);
  });
});
