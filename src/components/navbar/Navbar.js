import React from "react";
import "../../App.css";
import Navmenu from "./Navmenu";

const Navbar = (props) => {
  return (
    <nav className="navbar">
      <a href="#">
        <img
          class="logo-docplanner"
          src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1"
          alt="Docplanner Group"
        />
      </a>
      <div className="nav-menu">
      <Navmenu menu={props.menu} />

      </div>
    </nav>
  );
};

export default Navbar;
