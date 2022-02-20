import React, { useState } from "react";
import logo from "../assets/images/counsel.png";
import Button from "./Button";
import HorizontalSplitIcon from "@material-ui/icons/HorizontalSplit";
import CloseIcon from "@material-ui/icons/Close";

function Header() {
  const [click, setClick] = useState(false);
  //const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 900) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 900) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_wrapper_left">
          <div className="header_wrapper_left_logo" onClick={closeMobileMenu}>
            <img src={logo} alt="" />
          </div>
          <div className="mobile-menu">
            {click ? (
              <CloseIcon onClick={handleClick} className="mobile-menu_icon" />
            ) : (
              <HorizontalSplitIcon
                onClick={handleClick}
                className="mobile-menu_icon"
              />
            )}
          </div>
          <div className={`header_wrapper_left_menu ${click && "active"}`}>
            <ul>
              <li onClick={closeMobileMenu}>Home</li>
              <li onClick={closeMobileMenu}>Services</li>
              <li onClick={closeMobileMenu}>Lawyers</li>
              <li onClick={closeMobileMenu}>Blog</li>
              <li onClick={closeMobileMenu}>About</li>
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
