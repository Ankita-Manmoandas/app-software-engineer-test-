import React from "react";
import { Link } from "react-router-dom";
import "./Navmenu.scss";
import blackCross from "../../assests/images/black-cross.png";

const Navmenu = (props) => {
  const { toggle } = props;

  return (
    <div className="nav-menu">
      <div className="nav-menu__content">
        <img src={blackCross} onClick={toggle} className="cross" />
        <Link to="" className="nav-menu__item" onClick={toggle}>
          Home
        </Link>
        <Link to="/about" className="nav-menu__item" onClick={toggle}>
          About
        </Link>
        <Link
          to="/contact"
          className="nav-menu__item"
          onClick={toggle}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navmenu;
