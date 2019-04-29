import React from 'react';
import Card from '@material-ui/core/Card';

import RegisterForm from './RegisterForm';
import RegisterConfirmation from './RegisterConfirmation';
import { authRef } from '../../config/firebase';
import './register.css';

class Register extends React.Component {
  state = {
    submit: false,
    name: ''
  };

  handleSubmit = values => {
    this.setState({ submit: true, name: values.firstName });
    authRef
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(data => {
        console.log(data);
        authRef.currentUser.updateProfile({
          displayName: values.firstName + values.lastName,
          phoneNumber: values.phone
        });
      })
      .catch(err => {
        console.log(err);
      });
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
