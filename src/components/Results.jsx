import React from "react";
import { Spinner, Card, Badge } from "react-bootstrap";
import { useSelector } from "react-redux";

const Results = () => {
  const {
    isFetching,
    items: { cars, goats, size, changeSelection },
  } = useSelector(state => state.gameSimulation);

  const carPercentage = Math.round((cars / size) * 100);
  const goatsPercentage = 100 - carPercentage;

  return isFetching ? (
    <Spinner animation="border" variant="primary" />
  ) : size > 0 ? (
    <Card>
      <Card.Header>
        <strong>
          Simulation result for{" "}
          <Badge pill={true} variant="warning">
            {size}
          </Badge>{" "}
          tries
        </strong>
      </Card.Header>
      <Card.Body>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              height: "40px",
              margin: "5px 0",
              flexDirection: "row",
              color: "#fff",
            }}
          >
            <div
              style={{
                width: `${carPercentage}%`,
                height: "100%",
                background: "#28a745",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {carPercentage}%
            </div>
            <div
              style={{
                width: `${goatsPercentage}%`,
                height: "100%",
                background: "#dc3545",
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
              }}
            >
              {goatsPercentage}%
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            <div>No. of Cars: {cars}</div>
            <div>No. of Goats: {goats}</div>
          </div>
        </div>
      </Card.Body>
      <Card.Footer>
        Change selection was{" "}
        <strong>{changeSelection ? "Enabled" : "Disabled"}</strong>
      </Card.Footer>
    </Card>
  ) : null;
};

export default Results;
