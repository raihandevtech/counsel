import React from "react";
import logo from "../assets/images/counsel.png";
import Button from "./Button";

function Header() {
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_wrapper_left">
          <div className="header_wrapper_left_logo">
            <img src={logo} alt="" />
          </div>
          <div className="header_wrapper_left_menu">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Lawyers</li>
              <li>Blog</li>
              <li>About</li>
            </ul>
          </div>
        </div>
        <div className="header_wrapper_right">
          <Button size="medium" color="black" text="Sign Up" />
        </div>
      </div>
    </div>
  );
}

export default Header;
