import React from "react";

const Input = ({ nom, placeholderText }) => {
  return (
    <div className="home__input-search">
      <input type="text" name={nom} placeholder={placeholderText} />
    </div>
  );
};

export default Input;
