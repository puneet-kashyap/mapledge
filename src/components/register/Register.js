import React from 'react';
import Card from '@material-ui/core/Card';

import RegisterForm from './RegisterForm';
import RegisterConfirmation from './RegisterConfirmation';

import './register.css';

class Register extends React.Component {
  state = {
    submit: false,
    name: ''
  };

  handleSubmit = values => {
    this.setState({ submit: true, name: values.firstName });
  };

  render() {
    return (
      <div className="registration">
        <Card className="registration-card">
          <h1 className="register-title">Registration</h1>
          {!this.state.submit && <RegisterForm onSubmit={this.handleSubmit} />}
          {this.state.submit && <RegisterConfirmation name={this.state.name} />}
        </Card>
      </div>
    );
  }
}

export default Register;
