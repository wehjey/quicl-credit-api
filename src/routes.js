import express from 'express';
import registerController from './controllers/registerController';
import createUserRequest from './requests/createUserRequest';

const router = express.Router();

router.post('/auth/register', createUserRequest, registerController.create);

module.exports = router;
