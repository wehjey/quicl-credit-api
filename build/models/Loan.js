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

var Loan =
/*#__PURE__*/
function () {
  function Loan() {
    _classCallCheck(this, Loan);

    this.loans = [];
  }
  /**
   * @param {object} data
   */


  _createClass(Loan, [{
    key: "create",
    value: function create(data) {
      var newLoan = {
        id: _uuid["default"].v4(),
        user: data.email,
        status: 'pending',
        repaid: false,
        tenor: data.tenor,
        amount: data.amount,
        paymentInstallment: data.paymentInstallment,
        balance: data.balance,
        interest: data.interest,
        createdAt: _moment["default"].now(),
        updatedAt: _moment["default"].now()
      };
      this.loans.push(newLoan);
      return newLoan;
    }
    /**
     * @param {uuid} id
     */

  }, {
    key: "findOne",
    value: function findOne(id) {
      return this.loans.find(function (loan) {
        return loan.id === id;
      });
    }
  }, {
    key: "findAll",
    value: function findAll() {
      return this.loans;
    }
    /**
     * @param {uuid} id
     * @param {object} data
     */

  }, {
    key: "update",
    value: function update(id, data) {
      var loan = this.findOne(id);
      var index = this.loans.indexOf(loan);
      this.loans[index].tenor = data.tenor;
      this.loans[index].amount = data.amount;
      this.loans[index].paymentInstallment = data.paymentInstallment;
      this.loans[index].balance = data.balance;
      this.loans[index].interest = data.interest;
      this.loans[index].updatedAt = _moment["default"].now();
      return this.loans[index];
    }
  }, {
    key: "delete",
    value: function _delete(id) {
      var loan = this.findOne(id);
      var index = this.loan.indexOf(loan);
      this.loans.splice(index, 1);
      return {};
    }
  }]);

  return Loan;
}();

var _default = new Loan();

exports["default"] = _default;