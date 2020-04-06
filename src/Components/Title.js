import React from "react";
import PropTypes from "prop-types";
const Title = ({ children }) => {
  return (
    <div>
      <h1 className="title">{children}</h1>
    </div>
  );
};
Title.propTypes = {
  children: PropTypes.string.isRequired,
};
export default Title;
