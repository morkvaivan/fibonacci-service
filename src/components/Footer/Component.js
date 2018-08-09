import React from 'react';
import logo from './logo.svg';
import './Component.css';

const title = '@morkvaivan, 2018';

const Footer = () => (
  <footer className="Footer">
    <img
      src={logo}
      className="Footer-logo"
      alt="logo"
    />
    <h1
      className="Footer-title"
    >
      {title}
    </h1>
  </footer>
);

export default Footer;
