import { check } from 'express-validator/check';

const rules = [
  check('email')
    .exists().withMessage('must be provided')
    .isEmail()
    .withMessage('must be an email address'),
  // password must be at least 5 chars long
  check('password').exists().withMessage('must be provided')
    .isLength({
      min: 6,
    })
    .withMessage('must have a minimum lenght of 5 characters'),
];

module.exports = rules;
