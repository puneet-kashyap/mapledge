import React from 'react';
import Card from '@material-ui/core/Card';
import assets from '../../assets/constants';
import './contact.css';
// import businessman from '../../images/businessman';

class Contact extends React.Component {
  render() {
    return (
      <div className="contact">
        <div>
          <h1 className="page-title">Contact</h1>
          <div className="card">
            {assets.contacts.map((item, index) => {
              return (
                <div key={index} className="card-item">
                  <Card>
                    <h2>{item.name}</h2>
                    <div className="contact-details">
                      <div>
                        <a href={`tel:${item.phone}`}>{item.phone}</a>
                      </div>
                      <div className="email">
                        <a href={`mailto: ${item.email}`}>{item.email}</a>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
