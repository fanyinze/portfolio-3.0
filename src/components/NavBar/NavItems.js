import React, { Fragment } from "react";
import { Link } from "react-scroll";
import resume from "./assets/resume.docx";

const NavItems = () => {
  return (
    <Fragment>
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
      <a href={resume} className='nav-resume' target='_blank'>
        Resume
      </a>
    </Fragment>
  );
};

export default NavItems;
