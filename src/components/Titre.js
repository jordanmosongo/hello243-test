import React from "react";

const Titre = ({ name }) => {
  return (
    <div className="home__candidates-container__element__title">
      <h3>{name}</h3>
    </div>
  );
};

export default Titre;
