import React, { useEffect, useState, useRef } from "react";
import { Card, Button, InputGroup, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getGameData } from "actions/gameData";
import { gameSimulation, resetToInitial } from "actions/gameSimulation";
import { setFormat } from "actions/format";
import { GAME, SIMULATION } from "constants/format";

const Starter = () => {
  const dispatch = useDispatch();
  const [noOfSimulation, setNoOfSimulation] = useState(0);
  const [selectionChangeOnTrick, setSelectionChangeOnTrick] = useState(true);
  const noOfSimulationRef = useRef(null);
  const selectionChangeInputRef = useRef(null);
  const doorSelectionRef = useRef(null);

  const { isFetching: loading } = useSelector(state => state.gameSimulation);

  useEffect(() => {
    if (noOfSimulation > 0 && loading) {
      const selection = doorSelectionRef.current.value;
      const changeSelection = selectionChangeInputRef.current.checked;
      setTimeout(() => {
        dispatch(gameSimulation(noOfSimulation, selection, changeSelection));
      }, 100);
    }
  }, [noOfSimulation, loading]);

  const noop = () => 0;

  const onLoadSimulation = () => {
    dispatch(resetToInitial());
    dispatch(setFormat(SIMULATION));
    const noOfSimulation = +noOfSimulationRef.current.value;
    setNoOfSimulation(noOfSimulation);
  };

  const onPlayGame = () => {
    dispatch(getGameData(1));
    dispatch(setFormat(GAME));
  };

  const onCheckBoxChange = e => setSelectionChangeOnTrick(e.target.checked);

  return (
    <Card className={"my-auto"}>
      <Card.Header>Let's Make a Deal</Card.Header>
      <Card.Body>
        <Card.Text>
          You will see three closed doors - behind one is a car, and behind the
          other two are goats. Select one door and try your luck. The computer
          might trick you. Be prepared!
        </Card.Text>
        <br />
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Select Number of Simulation</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" ref={noOfSimulationRef}>
            <option>10</option>
            <option>50</option>
            <option>100</option>
            <option>1000</option>
            <option>5000</option>
          </Form.Control>
        </InputGroup>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>Select Door Number</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control as="select" ref={doorSelectionRef}>
            <option value="0">Door 1</option>
            <option value="1">Door 2</option>
            <option value="2">Door 3</option>
          </Form.Control>
        </InputGroup>
        <div className="mb-3">
          <Form.Check
            ref={selectionChangeInputRef}
            type="checkbox"
            checked={selectionChangeOnTrick}
            onChange={onCheckBoxChange}
            label="Enable selection change after computer tricks you"
          />
        </div>
        <Button
          variant="primary"
          onClick={loading ? noop : onLoadSimulation}
          disabled={loading}
        >
          Load Simulation
        </Button>{" "}
        <Button
          variant="secondary"
          onClick={loading ? noop : onPlayGame}
          disabled={loading}
        >
          Play Game Instead
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Starter;
