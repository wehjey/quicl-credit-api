import { validationResult } from 'express-validator/check';
import User from '../models/User';

const registerController = {
  create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        status: 422,
        errors: errors.array(),
      });
    }
    const user = User.create(req.body);
    return res.status(201).send({
      status: 201,
      data: user,
    });
  },
};

module.exports = registerController;
