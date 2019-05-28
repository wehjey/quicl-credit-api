import moment from 'moment';
import uuid from 'uuid';

class Loan {
  constructor() {
    this.loans = [];
  }

  /**
   * @param {object} data
   */
  create(data) {
    const newLoan = {
      id: uuid.v4(),
      user: data.email,
      status: 'pending',
      repaid: false,
      tenor: data.tenor,
      amount: data.amount,
      paymentInstallment: data.paymentInstallment,
      balance: data.balance,
      interest: data.interest,
      createdAt: moment.now(),
      updatedAt: moment.now(),
    };
    this.loans.push(newLoan);
    return newLoan;
  }

  /**
   * @param {uuid} id
   */
  findOne(id) {
    return this.loans.find(loan => loan.id === id);
  }

  findAll() {
    return this.loans;
  }

  /**
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const loan = this.findOne(id);
    const index = this.loans.indexOf(loan);
    this.loans[index].tenor = data.tenor;
    this.loans[index].amount = data.amount;
    this.loans[index].paymentInstallment = data.paymentInstallment;
    this.loans[index].balance = data.balance;
    this.loans[index].interest = data.interest;
    this.loans[index].updatedAt = moment.now();
    return this.loans[index];
  }

  delete(id) {
    const loan = this.findOne(id);
    const index = this.loan.indexOf(loan);
    this.loans.splice(index, 1);
    return {};
  }
}

export default new Loan();
