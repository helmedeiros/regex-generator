import { shallow } from "enzyme";
import * as React from "react";
import { RegexPreview } from "./RegexPreview";

describe("RegexPreview", () => {
  it("wraps each matched range in a mark", () => {
    const wrapper = shallow(
      <RegexPreview text="a1 b22" ranges={[{ start: 1, end: 2 }, { start: 4, end: 6 }]} />
    );
    expect(wrapper.find(".preview-match").length).toBe(2);
  });

  it("shows the plain text when there are no matches", () => {
    expect(
      shallow(<RegexPreview text="abc" ranges={[]} />)
        .find(".regex-preview")
        .text()
    ).toBe("abc");
  });
});
