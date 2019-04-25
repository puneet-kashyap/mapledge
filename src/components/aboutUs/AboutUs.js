import React from 'react';
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
      </div>
    );
  }
}

export default AboutUs;
