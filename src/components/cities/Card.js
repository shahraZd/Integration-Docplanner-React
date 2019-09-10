import React from "react";
import "./Card.css"
const Card = (props) => {
  return (
    <div className="img-card ">
      <img src={props.image} alt="Card" />
      <div className="desc">
        <p>{props.title}</p>
        <button className="btn">{props.button}</button>
      </div>
    </div>
  );
};

export default Card;
