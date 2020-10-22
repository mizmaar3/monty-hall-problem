import { getRandomInt } from "helpers/math";

describe("getRandomInt", () => {
  it("should return a value between 0 to 2 if no arg provided", () => {
    const result = getRandomInt();
    expect([0, 1, 2].includes(result)).toBe(true);
  });

  it("should return a value between 1 to arg provided", () => {
    const result = getRandomInt(5);
    expect([0, 1, 2, 3, 4].includes(result)).toBe(true);
  });
});
