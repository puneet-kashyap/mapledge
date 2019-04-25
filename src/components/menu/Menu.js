import React from 'react';
import { Link } from 'react-router-dom';

import './menu.css';

class Menu extends React.Component {
  menuItem = [
    { title: 'Home', path: '/' },
    { title: 'Register', path: '/register' },
    { title: 'About Us', path: '/about' },
    { title: 'Contact', path: '/contact' },
  ];
  render() {
    return (
      <nav className="menu">
        {this.menuItem.map((item, index) => {
          return (
            <div key={index} className="menu-item">
              <Link className="menu-link" to={`${item.path}`}>
                {item.title}
              </Link>
            </div>
          );
        })}
      </nav>
    );
  }
}

export default Menu;
