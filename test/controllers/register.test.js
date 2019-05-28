import 'dotenv/config';
import chai from 'chai';
import chaiHttp from 'chai-http';
import server from '../../src/server';
import { correctUser, incorrectUser } from '../mock';

const baseUrl = process.env.BASE_URL;

chai.should();
chai.use(chaiHttp);

describe('Register Controller', () => {
  describe('Create function', () => {
    it('it should not register a user without email or password', (done) => {
      chai.request(server)
        .post(`${baseUrl}/auth/register`)
        .send(incorrectUser)
        .end((err, res) => {
          res.should.have.status(422);
          res.body.should.be.a('object');
          res.body.should.have.property('errors');
          done();
        });
    });
    it('it should register a user with at least email and password', (done) => {
      chai.request(server)
        .post(`${baseUrl}/auth/register`)
        .send(correctUser)
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          res.body.should.have.property('data');
          done();
        });
    });
  });
});
