import React from "react";
import PropTypes from "prop-types";
const Meme = ({ name, image, status, species }) => {
  return (
    <div className="single-meme">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Status: {status}</p>
      <p>Specie: {species}</p>
    </div>
  );
};
Meme.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
export default Meme;
