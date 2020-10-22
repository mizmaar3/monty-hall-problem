import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Button, Badge } from "react-bootstrap";
import Door from "containers/door";
import Status from "containers/status";
import { WON, LOST } from "constants/status";
import { AWARD, TROLL } from "constants/content";

const Game = props => {
  const { data, changeSelectionAfterTrick } = props;
  const dataIndices = data.map((v, i) => i);

  const [status, setStatus] = useState("");
  const [trivia, setTrivia] = useState("");
  const [selected, setSelected] = useState([]);
  const [opened, setOpened] = useState([]);
  const [onSelectionText, setOnSelectionText] = useState(false);
  const [onOpenText, setOnOpenText] = useState(false);
  const [selectionChangeOptionText, setSelectionChangeOptionText] = useState(
    false
  );

  const closedAndNotSelected = () =>
    dataIndices.find(v => v !== selected[0] && !opened.includes(v));

  const onSelection = e => {
    const selection = +e.target.value;
    if (changeSelectionAfterTrick) {
      setSelected([selection]);
    } else {
      setOpened([selection]);
      setStatus(data[selection] === 1 ? WON : LOST);
    }
  };

  const trickThePlayer = () => {
    const doorToOpen = dataIndices.find(
      v => v !== selected[0] && data[v] !== 1
    );
    setOpened([doorToOpen]);
  };

  const conclude = (selection, doorsToOpen, didChange = false) => {
    setOpened(doorsToOpen);
    setStatus(selection === 1 ? WON : LOST);
    setSelectionChangeOptionText(false);
    let triviaText = "Wow nice luck!";
    if (didChange) {
      triviaText =
        selection === 1
          ? "Good that you changed your selection :)"
          : "Hard luck!";
    } else {
      triviaText =
        selection === 1
          ? "Wow nice luck!"
          : "You had a chance to change your selection!";
    }
    setTrivia(triviaText);
  };

  const onChangeSelection = () => {
    const changedSelection = closedAndNotSelected();
    const doorsToOpen = [...opened, changedSelection];
    conclude(changedSelection, doorsToOpen, true);
  };

  const onKeepSelection = () => {
    const doorsToOpen = [...opened, ...selected];
    conclude(data[selected[0]], doorsToOpen, false);
  };

  useEffect(() => {
    if (selected.length === 1) {
      trickThePlayer();
      setOnSelectionText(true);
    }
  }, [selected]);

  useEffect(() => {
    if (opened.length === 1 && changeSelectionAfterTrick) {
      setOnOpenText(true);
    }
  }, [opened]);

  useEffect(() => {
    if (opened.length === 1 && changeSelectionAfterTrick) {
      setSelectionChangeOptionText(true);
    }
  }, [opened]);

  return (
    <div
      style={{
        width: "80%",
        pointerEvents: status ? "none" : "auto",
        position: "relative",
        padding: "10px",
        fontSize: "14px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "10px",
        }}
      >
        {data.map((d, i) => {
          return (
            <div key={`door-${i}`} style={{ height: "fit-content" }}>
              <Door
                open={opened.includes(i)}
                selected={selected[0] === i}
                content={d === 1 ? AWARD : TROLL}
              />
              {selected.length === 0 && (
                <Button
                  style={{
                    marginTop: "10px",
                  }}
                  variant="primary"
                  value={i}
                  onClick={onSelection}
                >
                  Select Door {i + 1}
                </Button>
              )}
            </div>
          );
        })}
      </div>

      {onSelectionText && (
        <div>
          You selected <Badge variant="primary">Door {+selected[0] + 1}</Badge>
        </div>
      )}

      {onOpenText && (
        <div>
          The computer opened{" "}
          <Badge variant="info">Door {+opened[0] + 1}</Badge> and it was a GOAT
        </div>
      )}

      {selectionChangeOptionText && (
        <div>
          You can change your selection from{" "}
          <Badge variant="secondary">Door {+selected[0] + 1} </Badge> to{" "}
          <Badge variant="secondary">Door {closedAndNotSelected() + 1}</Badge>
          <br />
          <br />
          <Button variant="primary" size={"sm"} onClick={onChangeSelection}>
            Yes change selection
          </Button>{" "}
          <Button variant="info" size={"sm"} onClick={onKeepSelection}>
            Keep selection and open the door
          </Button>
        </div>
      )}

      {trivia && (
        <div>
          <strong>{trivia}</strong>
        </div>
      )}

      {status && <Status content={status} />}
    </div>
  );
};

Game.defaultProps = {
  changeSelectionAfterTrick: true,
};

Game.propTypes = {
  data: PropTypes.array.isRequired,
  changeSelectionAfterTrick: PropTypes.bool,
};

export default Game;
