import React from 'react';
import HeaderBackground from './HeaderBackground';

const Header = () => {
  return (
    <div className="header-wrapper">
      <HeaderBackground />
      <div className="header">
        <div className="text">
          <div>
            Hello, I'm <span className="highlight">Yinze Fan</span>.
          <br />
            I'm a full-stack developer
          </div>
        </div>
      </div >
    </div>
  );
}

export default Header;