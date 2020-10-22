import { SET_FORMAT } from "actionTypes/format";

export const setFormat = format => ({
  type: SET_FORMAT,
  payload: { format },
});
