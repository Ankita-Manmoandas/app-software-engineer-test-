import React from "react";
import "./CTAButton.scss"

const CTAButton = props => {
  const { buttonText, isSecondary } = props;

  let buttonStyle = "button";

  if (isSecondary) {
    buttonStyle += " secondary";
  } else {
    buttonStyle += " primary";
  }

  return <button className={buttonStyle}>{buttonText}</button>;
}

export default CTAButton; 