import React from "react";
import { shallow } from "enzyme";
import Door from "containers/door";

describe("Door container", () => {
  it("Should render door correctly with default props", () => {
    const wrapper = shallow(<Door />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render door correctly with open prop", () => {
    const wrapper = shallow(<Door open={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render door correctly with selected prop", () => {
    const wrapper = shallow(<Door open={true} selected={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Should render door correctly with content prop and open", () => {
    const wrapper = shallow(<Door content={"content"} open={true} />);
    expect(wrapper).toMatchSnapshot();
  });
});
