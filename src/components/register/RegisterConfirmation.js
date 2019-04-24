import React from 'react';

class RegisterConfirmation extends React.Component {
  
  content = `Thank you ${this.props.name} for registering with Mapledge Staffing. One of our consultant will contact you soon for on boarding.`;

  render() {
    return (
      <div className="register-confirm">
        <p>{this.content}</p>
        <h2 className="register-confirm-brand">Mapledge Staffing</h2>
      </div>
    );
  }
}

export default RegisterConfirmation;
