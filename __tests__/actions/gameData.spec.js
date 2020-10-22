import { getGameData } from "actions/gameData";
import { GET_GAME_DATA } from "actionTypes/gameData";

describe("getGameData action", () => {
  it("should call dispatch with default values", () => {
    const dispatch = jest.fn();
    getGameData()(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_GAME_DATA,
      size: 1,
    });
  });

  it("should call dispatch with provided values", () => {
    const dispatch = jest.fn();
    getGameData(2, false)(dispatch);
    expect(dispatch).toHaveBeenCalledWith({
      type: GET_GAME_DATA,
      size: 2,
    });
  });
});
