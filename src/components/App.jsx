import React from "react";
import { useSelector } from "react-redux";
import Game from "./Game";
import Starter from "./Starter";
import Results from "./Results";
import { GAME } from "constants/format";

const App = () => {
  const {
    gameData: {
      items: { data: gameData },
    },
    format,
  } = useSelector(state => state);

  const renderGame = format === GAME && gameData[0] && gameData[0].length > 0;

  return renderGame ? (
    <Game data={gameData[0]} changeSelectionAfterTrick={true} />
  ) : (
    <>
      <Starter />
      <br />
      <Results />
    </>
  );
};

export default App;
