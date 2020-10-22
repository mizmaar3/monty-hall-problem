import { gameSimulation, resetToInitial } from "actions/gameSimulation";
import {
  GET_GAME_SIMULATION,
  GET_GAME_SIMULATION_INITIAL,
} from "actionTypes/gameSimulation";

describe("gameSimulation actions", () => {
  describe("gameSimulation action", () => {
    it("should call dispatch with default values", () => {
      const dispatch = jest.fn();
      gameSimulation()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: GET_GAME_SIMULATION,
        size: 1,
        selection: 0,
        changeSelection: true,
      });
    });

    it("should call dispatch with provided values", () => {
      const dispatch = jest.fn();
      gameSimulation(2, 1, false)(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: GET_GAME_SIMULATION,
        size: 2,
        selection: 1,
        changeSelection: false,
      });
    });
  });

  describe("resetToInitial", () => {
    it("should call dispatch with GET_GAME_SIMULATION_INITIAL type", () => {
      const dispatch = jest.fn();
      resetToInitial()(dispatch);
      expect(dispatch).toHaveBeenCalledWith({
        type: GET_GAME_SIMULATION_INITIAL,
      });
    });
  });
});
