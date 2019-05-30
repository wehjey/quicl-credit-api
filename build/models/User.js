"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

var _passwordHash = _interopRequireDefault(require("password-hash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var User =
/*#__PURE__*/
function () {
  function User() {
    _classCallCheck(this, User);

    this.users = [];
  }
  /**
   * @param {object} data
   */


  _createClass(User, [{
    key: "create",
    value: function create(data) {
      var newUser = {
        id: _uuid["default"].v4(),
        email: data.email,
        firstName: data.firstName || '',
        lastName: data.lastName || '',
        password: _passwordHash["default"].generate(data.password),
        address: data.address || '',
        status: 'unverified',
        isAdmin: false,
        createdAt: _moment["default"].now(),
        updatedAt: _moment["default"].now()
      };
      this.users.push(newUser);
      return newUser;
    }
    /**
     * @param {uuid} id
     */

  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.users.find(function (user) {
        return user.id === id;
      });
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.users;
    }
    /**
     * @param {uuid} id
     * @param {object} data
     */

  }, {
    key: "update",
    value: function update(id, data) {
      var user = this.findOne(id);
      var index = this.users.indexOf(user);
      this.users[index].firstName = data.firstName;
      this.users[index].lastName = data.lastName;
      this.users[index].address = data.address;
      this.users[index].isAdmin = false;
      this.users[index].updatedAt = _moment["default"].now();
      return this.users[index];
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var user = this.findOne(id);
      var index = this.users.indexOf(user);
      this.users.splice(index, 1);
      return {};
    }
  }]);

  return User;
}();

var _default = new User();

exports["default"] = _default;