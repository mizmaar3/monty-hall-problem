import data from "api/data";
import gameDataGenerator from "middleware/gameDataGenerator";
import { GET_GAME_DATA } from "actionTypes/gameData";

jest.mock("api/data");
data.mockImplementation(() => Promise.resolve({ status: "success" }));

describe("gameDataGenerator middleware", () => {
  it("should trigger next if action.type not GET_GAME_DATA", async () => {
    const dispatch = jest.fn();
    const next = jest.fn();

    await gameDataGenerator({ dispatch })(next)({
      type: "MY_ACTION_TYPE",
    });

    expect(next.mock.calls.length).toBe(1);

    expect(dispatch.mock.calls.length).toBe(0);
  });

  it("should trigger dispatch with _request and _success", async () => {
    const dispatch = jest.fn();

    await gameDataGenerator({ dispatch })(jest.fn())({
      type: GET_GAME_DATA,
      size: 1,
    });

    expect(dispatch.mock.calls.length).toBe(2);

    expect(dispatch).toHaveBeenCalledWith({ type: "GET_GAME_DATA_REQUEST" });

    expect(dispatch).toHaveBeenCalledWith({
      type: "GET_GAME_DATA_SUCCESS",
      payload: { data: { status: "success" } },
    });
  });

  it("should trigger dispatch with request and error", async () => {
    const dispatch = jest.fn();
    const err = new Error("error");
    data.mockImplementation(() => Promise.reject(err));

    await gameDataGenerator({ dispatch })(jest.fn())({
      type: GET_GAME_DATA,
      size: 1,
    });

    expect(dispatch.mock.calls.length).toBe(2);

    expect(dispatch).toHaveBeenCalledWith({ type: "GET_GAME_DATA_REQUEST" });

    expect(dispatch).toHaveBeenCalledWith({
      type: "GET_GAME_DATA_ERROR",
      payload: err,
    });
  });
});
