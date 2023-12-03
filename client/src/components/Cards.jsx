import React from "react";
import Tilt from "react-parallax-tilt";

const Card = () => {
  return (
    <>
      <div className="card-container">
        <Tilt>
          <div className="cards"></div>
        </Tilt>
        <Tilt>
          <div className="cards"></div>
        </Tilt>
        <Tilt>
          <div className="cards"></div>
        </Tilt>
      </div>
    </>
  );
};

export default Card;
