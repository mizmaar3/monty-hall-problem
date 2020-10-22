import { sleep } from "helpers/sleep";
import { getRandomInt } from "helpers/math";
import data from "./data";

const indices = [0, 1, 2];

const simulation = async (size, selection, changeSelection) => {
  if (size < 1) {
    throw new Error("Size must be 1 or heigher");
  }
  const gameData = await data(size);
  const selected = +selection;
  const results = {
    cars: 0,
    goats: 0,
    size,
    selection,
    changeSelection,
  };
  gameData.forEach(data => {
    const open = indices.filter(v => v !== selected && data[v] !== 1)[
      getRandomInt(2)
    ];
    const finalSelection = changeSelection
      ? indices.find(a => a !== open && a !== selected)
      : selected;
    data[finalSelection] === 1 ? (results.cars += 1) : (results.goats += 1);
  });

  await sleep(1000); // so we see loader
  return results;
};

export default simulation;
