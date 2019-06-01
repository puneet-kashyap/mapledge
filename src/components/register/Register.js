import React from 'react';
import Card from '@material-ui/core/Card';

import RegisterForm from './RegisterForm';
import RegisterConfirmation from './RegisterConfirmation';
import { authRef, dbRef } from '../../config/firebase';
import './register.css';

class Register extends React.Component {
  state = {
    submit: false,
    name: ''
  };

  addUserToDb(user) {
    dbRef
      .collection('Users')
      .doc(user.email)
      .set(user);
  }

  handleSubmit = values => {
    this.setState({ submit: true, name: values.firstName });
    const { firstName, lastName, email, password } = values;
    authRef
      .createUserWithEmailAndPassword(email, password)
      .then(data => {
        this.addUserToDb({ ...values, ...{ userId: data.user.uid } });
        authRef.currentUser.updateProfile({
          displayName: `${firstName} ${lastName}`
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
