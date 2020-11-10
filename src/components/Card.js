import React from "react";

const Card = ({ id, name, email }) => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="robots" />
      <div>
        <h2 className="mt2 mb1">{name}</h2>
        <p className="mt1 mb1">{email}</p>
      </div>
    </div>
  );
};

export default Card;
