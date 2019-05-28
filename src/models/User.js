import moment from 'moment';
import uuid from 'uuid';
import passwordHash from 'password-hash';

class User {
  constructor() {
    this.users = [];
  }

  /**
   * @param {object} data
   */
  create(data) {
    const newUser = {
      id: uuid.v4(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: passwordHash.generate(data.password),
      address: data.address,
      status: 'unverified',
      isAdmin: false,
      createdAt: moment.now(),
      updatedAt: moment.now(),
    };
    this.users.push(newUser);
    return newUser;
  }

  /**
   * @param {uuid} id
   */
  findOne(id) {
    return this.users.find(user => user.id === id);
  }

  findAll() {
    return this.users;
  }

  /**
   * @param {uuid} id
   * @param {object} data
   */
  update(id, data) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users[index].firstName = data.firstName;
    this.users[index].lastName = data.lastName;
    this.users[index].address = data.address;
    this.users[index].isAdmin = false;
    this.users[index].updatedAt = moment.now();
    return this.users[index];
  }

  delete(id) {
    const user = this.findOne(id);
    const index = this.users.indexOf(user);
    this.users.splice(index, 1);
    return {};
  }
}

export default new User();
