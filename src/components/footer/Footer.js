import React from 'react';
import './footer.css';
import assets from '../../assets/constants';

class Footer extends React.Component {
  contacts = [];

  render() {
    return (
      <>
        <footer className="footer">
          {assets.contacts.map((item, index) => {
            return (
              <div key={index} className="footer-item">
                <div className="name">{item.name}</div>
                <div className="contact-option">
                  <a className="phone" href={`tel:${item.phone}`}>
                    {item.phone}
                  </a>
                </div>
                <div className="contact-option">
                  <a className="email" href={`mailto:${item.email}`}>
                    {item.email}
                  </a>
                </div>
              </div>
            );
          })}
        </footer>
        {subFooter(assets.contacts[0].email)}
      </>
    );
  }
}

const subFooter = email => {
  return (
    <div className="footer-below">
      <div>
        Copyright &copy; {assets.companyName} {new Date().getFullYear()}
      </div>
      <div>
        Built with{' '}
        <span role="img" aria-label="heart">
          💖
        </span>
        by the
        <a style={{ color: 'white' }} href={`mailto:${email}`}>
          Kashyap
        </a>
        team
      </div>
    </div>
  );
};

export default Footer;
