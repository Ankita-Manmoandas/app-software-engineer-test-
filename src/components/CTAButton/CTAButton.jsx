import React from "react";
import "./CTAButton.scss";

const CTAButton = (props) => {
  const { buttonText, isSecondary } = props;

  let buttonStyle = "button";

  if (isSecondary) {
    buttonStyle += " secondary";
  } else {
    buttonStyle += " primary";
  }

  return (
    <div className="buttons">
      <button className={buttonStyle}>{buttonText}</button>
    </div>
  );
};

export default CTAButton;
