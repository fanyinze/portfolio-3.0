import React from "react";
import { Link } from "react-scroll";
import MenuIcon from "@material-ui/icons/Menu";

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
            <li>
              <Link
                activeClass='active'
                to='home'
                spy={true}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='aboutMe'
                spy={true}
                smooth={true}
                duration={500}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='experience'
                spy={true}
                smooth={true}
                duration={500}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='project'
                spy={true}
                smooth={true}
                duration={500}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                to='contact'
                spy={true}
                smooth={true}
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavbarDropdown;
