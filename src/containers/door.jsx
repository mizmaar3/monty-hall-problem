import React from "react";
import PropTypes from "prop-types";

const Door = props => {
  const { open, selected, content } = props;

  const background = open ? "#d4d4d4" : "#999";
  const getBorder = () => {
    if (selected) {
      return "4px solid #0f0";
    }
    if (open) {
      return "1px solid #00f";
    }
    return "";
  };

  return (
    <div
      style={{
        display: "flex",
        width: "125px",
        height: "200px",
        alignItems: "center",
        justifyContent: "center",
        background,
        border: getBorder(),
      }}
    >
      {open ? content : ""}
    </div>
  );
};

Door.defaultProps = {
  open: false,
  selected: false,
  content: "",
};

Door.propTypes = {
  open: PropTypes.bool,
  selected: PropTypes.bool,
  content: PropTypes.string,
};

export default Door;
