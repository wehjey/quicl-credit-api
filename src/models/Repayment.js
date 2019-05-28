import moment from 'moment';
import uuid from 'uuid';

class Repayment {
  constructor() {
    this.repayments = [];
  }

  /**
   * @param {object} data
   */
  create(data) {
    const newRepayment = {
      id: uuid.v4(),
      loanId: data.loanId,
      amount: data.amount,
      createdAt: moment.now(),
      updatedAt: moment.now(),
    };
    this.repayments.push(newRepayment);
    return newRepayment;
  }

  /**
   * @param {uuid} id
   */
  findOne(id) {
    return this.repayments.find(repayment => repayment.id === id);
  }

  findAll() {
    return this.repayments;
  }

  /**
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const repayment = this.findOne(id);
    const index = this.repayments.indexOf(repayment);
    this.repayments[index].amount = data.amount;
    this.repayments[index].updatedAt = moment.now();
    return this.repayments[index];
  }

  delete(id) {
    const repayment = this.findOne(id);
    const index = this.repayment.indexOf(repayment);
    this.repayments.splice(index, 1);
    return {};
  }
}

export default new Repayment();
