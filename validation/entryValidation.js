const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateEntryInput = data => {
  let errors = {};

  // Check content field
  if(isEmpty(data.content)) {
    // If empty, display this error message
    errors.content = "Content field can not be empty";
  } else if ( !Validator.isLength(data.content, {min:1, max: 1500})) {
    // If it is not empty and there are less than 1 or more than 
    // 1500 characters , display this error message.
    errors.content = 'Content field must be between 1 and 1500 characters';
  }

  // If there are no errors, return empty/no error message 
  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateEntryInput;

