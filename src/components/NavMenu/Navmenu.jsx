import React from "react";
import { Link } from "react-router-dom";
import "./Navmenu.scss";
import blackCross from "../../assets/images/black-cross.png";
import CTAButton from "../CTAButton/CTAButton";
const Navmenu = (props) => {
  const { toggle } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} onClick={toggle} className="cross" />
        <Link
          to="app-software-engineer-test-"
          className="nav-menu__item"
          onClick={toggle}
        >
          Home
        </Link>
        <Link to="/about" className="nav-menu__item" onClick={toggle}>
          About us
        </Link>
        <Link to="/contact" className="nav-menu__item" onClick={toggle}>
          Contact us
        </Link>
        <CTAButton
          buttonText={"Log in"}
          isSecondary={true}
          className="nav-menu__button"
        />
      </div>
    </div>
  );
};

export default Navmenu;
