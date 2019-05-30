"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _uuid = _interopRequireDefault(require("uuid"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Repayment =
/*#__PURE__*/
function () {
  function Repayment() {
    _classCallCheck(this, Repayment);

    this.repayments = [];
  }
  /**
   * @param {object} data
   */


  _createClass(Repayment, [{
    key: "create",
    value: function create(data) {
      var newRepayment = {
        id: _uuid["default"].v4(),
        loanId: data.loanId,
        amount: data.amount,
        createdAt: _moment["default"].now(),
        updatedAt: _moment["default"].now()
      };
      this.repayments.push(newRepayment);
      return newRepayment;
    }
    /**
     * @param {uuid} id
     */

  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.repayments.find(function (repayment) {
        return repayment.id === id;
      });
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.repayments;
    }
    /**
     * @param {uuid} id
     * @param {object} data
     */

  }, {
    key: "update",
    value: function update(id, data) {
      var repayment = this.findOne(id);
      var index = this.repayments.indexOf(repayment);
      this.repayments[index].amount = data.amount;
      this.repayments[index].updatedAt = _moment["default"].now();
      return this.repayments[index];
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var repayment = this.findOne(id);
      var index = this.repayment.indexOf(repayment);
      this.repayments.splice(index, 1);
      return {};
    }
  }]);

  return Repayment;
}();

var _default = new Repayment();

exports["default"] = _default;