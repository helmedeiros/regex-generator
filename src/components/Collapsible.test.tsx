import { shallow } from "enzyme";
import * as React from "react";
import { Collapsible } from "./Collapsible";

describe("Collapsible", () => {
  it("hides its body until opened", () => {
    const wrapper = shallow(
      <Collapsible title="Options">
        <span className="child" />
      </Collapsible>
    );
    expect(wrapper.find(".collapsible-body").length).toBe(0);
  });

  it("shows its body after toggling", () => {
    const wrapper = shallow(
      <Collapsible title="Options">
        <span className="child" />
      </Collapsible>
    );
    wrapper.find(".collapsible-toggle").simulate("click");
    expect(wrapper.find(".collapsible-body").length).toBe(1);
  });
});
