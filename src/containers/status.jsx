import React from "react";
import PropTypes from "prop-types";
import { LOST } from "constants/status";

const Status = props => {
  const { content } = props;

  return (
    <div
      style={{
        display: "flex",
        background:
          content === LOST ? "rgba(255, 0, 0, 0.2)" : "rgba(0, 255, 0, 0.2)",
        position: "absolute",
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        fontSize: "50px",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {content}
    </div>
  );
};

Status.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Status;
