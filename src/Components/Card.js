import React from "react";

const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <img src={props.url} alt={props.name} />

      <h2>{props.name}</h2>
      <p>{props.title}</p>
    </div>
  );
};

export default Card;
