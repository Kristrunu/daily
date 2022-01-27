const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateRegisterInput = (data) => {
  let errors = {};

  // Check the email field
  if(isEmpty(data.email)) {
    errors.email = 'Email field can not be empty';
  } else if(!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid, please provide a valid email'
  }

  if(isEmpty(data.password)) {
    errors.password = "Password fields can not be empty"
  
  } else if(!Validator.isLength(data.password, {min: 6, max: 150})){
    errors.password = "Password must be bewtween 6 and 150 characters long"
  }

  if(isEmpty(data.name)) {
    errors.password = "Name field can not be empty"
  
  } else if(!Validator.isLength(data.name, {min: 2, max: 30})){
    errors.password = "Name must be between 2 and 30 characters long"
  }


  // Check the confirm password field 
  if(isEmpty(data.confirmPassword)) {
    errors.confirmPassword = "Confirm Password field can not be empty"; 
  } else if(!Validator.equals(data.password, data.confirmPassword)) {
    errors.confirmPassword = "Password and Confirm password must match";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };

};

module.exports = validateRegisterInput;
