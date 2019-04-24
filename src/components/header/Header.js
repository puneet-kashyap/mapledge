import React from 'react';
import './header.css';
import logo from '../../images/logo.png';
import Menu from '../menu/Menu';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="logo">
            <img className="logo-img" src={logo} alt="Logo" />
            <h1 className="brand">Mapledge Staffing</h1>
          </div>
        </header>
        <Menu />
      </>
    );
  }
}

export default Header;
