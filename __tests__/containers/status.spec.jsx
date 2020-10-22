import React from "react";
import { shallow } from "enzyme";
import Status from "containers/status";

describe("Status container", () => {
  it("Should render status with Won bg color", () => {
    const wrapper = shallow(<Status content={"WON"} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render status with lost bg color", () => {
    const wrapper = shallow(<Status content={"LOST"} />);
    expect(wrapper).toMatchSnapshot();
  });
});
