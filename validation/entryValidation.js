const Validator = require('validator');
const isEmpty = require('./isEmpty');

const validateEntryInput = data => {
  let errors = {};

  if(isEmpty(data.content)) {
    errors.content = "Content field can not be empty";
  } else if (!Validator.isLength(data.content, {min:1, max: 1500})) {
    errors.content = 'Content field must be between 1 and 1500 characters';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateEntryInput;

