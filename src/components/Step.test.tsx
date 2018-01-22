import { shallow } from "enzyme";
import * as React from "react";
import { Step } from "./Step";

describe("Step", () => {
  it("shows the step number", () => {
    expect(
      shallow(
        <Step index={2} title="Sample">
          x
        </Step>
      )
        .find(".step-number")
        .text()
    ).toBe("2");
  });

  it("shows the title", () => {
    expect(
      shallow(
        <Step index={1} title="Sample">
          x
        </Step>
      )
        .find(".step-title")
        .text()
    ).toBe("Sample");
  });

  it("renders its children", () => {
    const wrapper = shallow(
      <Step index={1} title="Sample">
        <span className="child" />
      </Step>
    );
    expect(wrapper.find(".child").length).toBe(1);
  });
});
