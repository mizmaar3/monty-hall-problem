import React from "react";
import { shallow } from "enzyme";
import App from "components/App";
import { useSelector } from "react-redux";
import Starter from "components/Starter";
import Game from "components/Game";
import Results from "components/Results";

jest.mock("components/Starter");
Starter.mockImplementation(() => <div>starter</div>);

jest.mock("components/Game");
Game.mockImplementation(() => <div>game</div>);

jest.mock("components/Results");
Results.mockImplementation(() => <div>results</div>);

jest.mock("react-redux");

describe("App component", () => {
  it("Should render <Starter> when load", () => {
    useSelector.mockImplementation(() => ({
      format: "",
      gameData: {
        items: {
          data: [],
        },
      },
    }));
    const wrapper = shallow(<App />);
    expect(wrapper.html().includes("<div>starter</div>")).toBe(true);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  it("Should render Game component when there is game data", () => {
    useSelector.mockImplementation(() => ({
      format: "GAME",
      gameData: {
        items: {
          data: [[1, 0, 0]],
        },
      },
    }));
    const wrapper = shallow(<App />);
    expect(wrapper.html().includes("<div>game</div>")).toBe(true);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
