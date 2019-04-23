import React from 'react';
import { Link } from "react-router-dom";

import './menu.css';

class Menu extends React.Component {
  menuItem = ['Home', 'Register', 'Jobs', 'Contact'];
  render() {
    return (
      <nav className="menu">
        {this.menuItem.map((item, index) => {
          return (
            <div key={index} className="menu-item">
               <Link className="menu-link" to={`/${item}`}>{item}</Link>
            </div>
          );
        })}
      </nav>
    );
  }
}

export default Menu;
