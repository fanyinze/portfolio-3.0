import React, { Component } from "react";
import { Link, Events, animateScroll as scroll, scroller } from "react-scroll";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo("scroll-to-element", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register("end", () => {
        resolve();
        Events.scrollEvent.remove("end");
      });

      scroller.scrollTo("scroll-container", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    });

    goToContainer.then(() =>
      scroller.scrollTo("scroll-container-second-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        containerId: "scroll-container",
      })
    );
  }
  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }
  render() {
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
  }
}

export default NavBar;
