import React from "react";
import { Link } from "react-scroll";

const NavbarTab = () => {
  return (
    <div>
      <nav className='navbar-container'>
        <ul className='navbar-ul'>
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
  );
};

export default NavbarTab;
