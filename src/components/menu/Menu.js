import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './menu.css';

class Menu extends React.Component {
  menuItems() {
    return [
      { title: 'Home', path: '/' },
      this.props.user
        ? { title: 'Jobs', path: '/profile' }
        : { title: 'Register', path: '/register' },
      { title: 'About Us', path: '/about' },
      { title: 'Contact', path: '/contact' }
    ];
  }

  render() {
    return (
      <nav className="menu">
        {this.menuItems().map((item, index) => {
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

const mapStateToProps = state => {
  return {
    user: state.auth.user
  };
};

export default connect(mapStateToProps)(Menu);
