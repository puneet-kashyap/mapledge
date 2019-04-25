import React from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

import * as about from '../../assets/aboutUs.json';
import './aboutUs.css';

class AboutUs extends React.Component {
  render() {
    return (
      <div className="about-us">
        <h1 className="about-title">About Us</h1>
        <div className="benefits">
          {about.benefits.map((item, index) => {
            return (
              <div className="benefit" key={index}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            );
          })}
        </div>
        <Button
          component={Link}
          variant="contained"
          color="primary"
          to="/contact"
          style={{ margin: '50px 0px' }}
        >
          Contact Us
        </Button>
      </div>
    );
  }
}

export default AboutUs;
