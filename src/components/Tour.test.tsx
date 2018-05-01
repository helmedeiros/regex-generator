import { mount } from "enzyme";
import * as React from "react";
import { tourSteps } from "../app/tour";
import { Tour } from "./Tour";

describe("Tour", () => {
  it("starts on the first step", () => {
    expect(
      mount(<Tour steps={tourSteps} onClose={jest.fn()} />)
        .find(".tour-title")
        .text()
    ).toBe("Sample");
  });

  it("advances with next", () => {
    const wrapper = mount(<Tour steps={tourSteps} onClose={jest.fn()} />);
    wrapper.find(".tour-next").simulate("click");
    expect(wrapper.find(".tour-title").text()).toBe("Recognition");
  });

  it("closes from the close button", () => {
    const onClose = jest.fn();
    mount(<Tour steps={tourSteps} onClose={onClose} />)
      .find(".tour-close")
      .simulate("click");
    expect(onClose).toBeCalled();
  });

  it("closes when escape is pressed", () => {
    const onClose = jest.fn();
    mount(<Tour steps={tourSteps} onClose={onClose} />);
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    expect(onClose).toBeCalled();
  });

  it("finishes from the last step", () => {
    const onClose = jest.fn();
    const wrapper = mount(<Tour steps={tourSteps} onClose={onClose} />);
    wrapper.find(".tour-next").simulate("click");
    wrapper.find(".tour-next").simulate("click");
    wrapper.find(".tour-next").simulate("click");
    wrapper.find(".tour-done").simulate("click");
    expect(onClose).toBeCalled();
  });
});
