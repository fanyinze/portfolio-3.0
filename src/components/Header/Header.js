import React from 'react';
import classes from './style/Header.module.css'
import HeaderBackground from './HeaderBackground/HeaderBackground';

const Header = () => {
  return (
    <div className={classes.header_wrapper}>
      <HeaderBackground />
      <div className={classes.header}>
        <div className={classes.text}>
          <div>
            Hello, I'm <span className={classes.highlight}>Yinze Fan</span>.
          <br />
            I'm a full-stack developer
          </div>
        </div>
      </div >
    </div>
  );
}

export default Header;