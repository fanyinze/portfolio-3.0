import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import NavItems from "./NavItems";

const showNavItems = () => {
  document.getElementById("nav-dropdown").classList.toggle("show");
};

const NavbarDropdown = () => {
  // Close the dropdown if the user clicks outside of it
  window.onclick = function (event) {
    if (!event.target.matches(".dropbtn")) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  return (
    <div className='dropdown'>
      <MenuIcon onClick={showNavItems} className='dropbtn'></MenuIcon>
      <div id='nav-dropdown' className='dropdown-content'>
        <nav>
          <ul>
           <NavItems />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDropdown;
