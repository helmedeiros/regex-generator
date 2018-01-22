import { shallow } from "enzyme";
import * as React from "react";
import { App } from "./App";

describe("App", () => {
  it("renders the title", () => {
    expect(
      shallow(<App />)
        .find(".app-title")
        .text()
    ).toBe("Regex Generator");
  });

  it("renders a header", () => {
    expect(shallow(<App />).find(".app-header").length).toBe(1);
  });
});
