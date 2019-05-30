"use strict";

var _check = require("express-validator/check");

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var registerController = {
  create: function create(req, res) {
    var errors = (0, _check.validationResult)(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: 422,
        errors: errors.array()
      });
    }

    var user = _User["default"].create(req.body);

    return res.status(201).send({
      status: 201,
      data: user
    });
  }
};
module.exports = registerController;