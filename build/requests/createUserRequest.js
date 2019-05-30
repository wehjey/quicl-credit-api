"use strict";

var _check = require("express-validator/check");

var rules = [(0, _check.check)('email').exists().withMessage('must be provided').isEmail().withMessage('must be an email address'), // password must be at least 5 chars long
(0, _check.check)('password').exists().withMessage('must be provided').isLength({
  min: 6
}).withMessage('must have a minimum lenght of 5 characters')];
module.exports = rules;