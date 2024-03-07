import React from "react";
import { useState } from "react";

import {
  BsCart3,
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";

function Header({ OpenSidebar, cartState }) {
  const [isCartMenuOpen, setIsCartMenuOpen] = useState(false);

  const toggleCartMenu = () => {
    console.log(cartState);
    setIsCartMenuOpen(!isCartMenuOpen);
  };

  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={OpenSidebar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header-right">
        <div className="header-link">
          <BsCart3
            className="icon_header icon-space"
            onClick={toggleCartMenu}
          />
        </div>

        {/* <a href="#" className="header-link">
          <BsFillEnvelopeFill className="icon icon-space" />
        </a>

        <a href="" className="header-link">
          <BsPersonCircle className="icon icon-space" />
        </a> */}
      </div>
    </header>
  );
}

export default Header;
