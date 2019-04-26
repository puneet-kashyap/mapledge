import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../images/logo.png';
import Menu from '../menu/Menu';
import './header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <div className="logo">
            <img className="logo-img" src={logo} alt="Logo" />
            <Link to="/">
              <h1 className="brand">Mapledge Staffing</h1>
            </Link>
          </div>
        </header>
        <Menu />
      </>
    );
  }
}

export default Header;
