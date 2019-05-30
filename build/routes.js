"use strict";

var _express = _interopRequireDefault(require("express"));

var _registerController = _interopRequireDefault(require("./controllers/registerController"));

var _createUserRequest = _interopRequireDefault(require("./requests/createUserRequest"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router();

router.post('/auth/register', _createUserRequest["default"], _registerController["default"].create);
module.exports = router;