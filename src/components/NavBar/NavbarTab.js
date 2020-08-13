import React from "react";
import NavItems from "./NavItems";

const NavbarTab = () => {
  return (
    <div>
      <nav className='navbar-container'>
        <ul className='navbar-ul'>
          <NavItems />
        </ul>
      </nav>
    </div>
  );
};

export default NavbarTab;
