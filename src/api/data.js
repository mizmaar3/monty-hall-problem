import { getRandomInt } from "helpers/math";

const possibilities = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];

const data = async (max = 1) => {
  const a = [];
  for (let i = 0; i < max; i += 1) {
    a[i] = possibilities[getRandomInt()];
  }
  return a;
};

export default data;
