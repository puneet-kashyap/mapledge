import React from 'react';
import RegisterForm from './RegisterForm';
import './register.css';

class Register extends React.Component {
  handleSubmit(values){
    console.log(values);
  }
  render() {
    return (
      <div className="registration">
        <RegisterForm onSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

export default Register;
