import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../index';
import { isValidCard } from '../utils/validation';
chai.use(chaiHttp);
chai.should();

describe('Credit card System', () => {
  describe('GET /', () => {
    // Test to get all credit card record
    it('should get all credit card record', done => {
      chai
        .request(app)
        .get('/api/v1/cards')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('POST /', () => {
    // Test to create a credit card record
    it('should create a credit card record', done => {
      chai
        .request(app)
        .post('/api/v1/cards')
        .end((err, res) => {
          res.should.have.status(201);
          res.body.should.be.a('object');
          done();
        });
    });
  });

  describe('Validate Credit Card Number', () => {
    // Test to validate a credit card number
    it('should validate a credit card number', done => {
      const isValid = isValidCard('5500000000000004');
      isValid.should.equal(true);
      done();
    });

    it('should not have a valid credit card number', done => {
      const isValid = isValidCard('10000');
      isValid.should.equal(false);
      done();
    });
    it('should have a valid space separated credit card number', done => {
      const isValid = isValidCard('5500 0000 0000 0004');
      isValid.should.equal(true);
      done();
    });
  });
});
