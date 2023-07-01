import React from "react";
import Button from "./Button";

const MainContentCard = ({ title, paragraph, btnText, icon }) => {
  return (
    <div className=" card-2 d-flex flex-column align-items-center justify-content-center">
      <h3>
        <span className="icon-pro mx-2">{icon}</span>
        {title}
      </h3>
      <p>{paragraph}</p>
      <Button
        text={btnText}
        buttonStyle="global-btn canva-primmary-btn w-100 "
      />
    </div>
  );
};

export default MainContentCard;
