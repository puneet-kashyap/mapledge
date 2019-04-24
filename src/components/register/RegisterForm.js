import React from 'react';
import { Field, Form } from 'redux-form';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import { reduxForm } from 'redux-form';

const validate = values => {
  const errors = {};
  const requiredFields = [
    'firstName',
    'lastName',
    'phone',
    'email',
    'password'
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required';
    }
  });

  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address';
  }

  if (values.phone && !/^(0|[+]{0,1}[1-9][0-9]{9,12})$/i.test(values.phone)) {
    errors.phone = 'Please enter your 10 digit phone number.';
  }

  if (values.password && values.password.length < 6) {
    errors.password = 'Your password must be 6 characters or long.';
  }
  return errors;
};

const renderTextField = ({
  input,
  label,
  meta: { touched, error, invalid },
  ...custom
}) => (
  <TextField
    label={label}
    variant="outlined"
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
    className="text-field"
    fullWidth
    style={{ marginBottom: '10px' }}
  />
);

class RegisterForm extends React.Component {
  onSubmit = formValues => {
    this.props.onSubmit(formValues);
    this.props.reset();
  };

  render() {
    const { handleSubmit, pristine, submitting } = this.props;
    return (
      <div>
          <Form onSubmit={handleSubmit(this.onSubmit)}>
            <Field
              name="firstName"
              type="text"
              label="First name"
              component={renderTextField}
            />
            <Field
              name="lastName"
              type="text"
              label="Last name"
              component={renderTextField}
            />
            <Field
              name="phone"
              type="text"
              label="Phone No."
              component={renderTextField}
            />
            <Field
              name="email"
              type="text"
              label="Email address (login)"
              component={renderTextField}
            />
            <Field
              name="password"
              type="password"
              label="Password"
              autoComplete="off"
              component={renderTextField}
            />
            <Button
              variant="contained"
              type="submit"
              color="primary"
              disabled={pristine || submitting}
              style={{ margin: '20px' }}
            >
              Submit
            </Button>
          </Form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'registrationForm',
  validate
})(RegisterForm);
