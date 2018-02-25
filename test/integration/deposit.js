"use strict";
/**
 * @module test/deposit
 */

const   sinon   = require("sinon"),
        chai    = require("chai"),
        expect  = chai.expect,
        Q       = require("q"),
        _       = require("lodash");

const dao = require('../../dao');
const sequelizeStub = dao.sequelize;
const DepositDbStub = dao.v8.Deposit;

var api = require("./common").api;

var userMock = "standard";
var userMockPower = "power";
var userMockAdmin = "administrator";

describe("/deposit", () => {

  let sandbox = null;

  beforeEach(() => {
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  before(function(done) {
    done();
  });

  /*
  *  DEPOSIT GET LIST TEST
  */
  describe("Deposit Retreive Tests", () => {

    describe("GET /loan/:id/deposits", () => {

      let queryData = require('./api-mocks/database/deposits.json');

      let getData = (id) => {
        let data = _.filter(queryData, { 'loanID': id });

        return data && data.length > 0 ? data : null;
      };

      let _findAll;

      beforeEach(() => {
        _findAll = sandbox.stub(DepositDbStub, 'findAll', (filters) => {
          if(filters.where.loanId === 777) {
            return Q.reject(new Error('Something bad happened'));
          }

          return Q(getData(filters.where.loanId));
        });
      });

      afterEach(() => {
        _findAll.restore();
      });

      it("should state a success when found", (done) => {

        api(userMock)
          .get(`/loan/18742/deposits`)
          .expectStatus(200)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            expect(body).to.deep.equal(getData(18742));
            if (err) return done(err);
            done();
          });
      });

      it("Should send not found error when no deposit found with this loan id", (done) => {

        api(userMock)
          .get(`/loan/111111/deposits`)
          .expectStatus(404)
          .end((err, res, body) => {
            sinon.assert.calledOnce(_findAll);
            if (err) return done(err);
            done();
          });
      });

      it("Should send bad request when given an invalid a non integer based loand id", (done) => {

        api(userMock)
        .get(`/loan/HJBJKBJHK85/deposits`)
        .expectStatus(400)
        .end((err, res, body) => {
          sinon.assert.callCount(_findAll, 0);
          if (err) return done(err);
          done();
        });
      });

      it("Should send internal server error when exception thrown", (done) => {

        api(userMock)
        .get(`/loan/777/deposits`)
        .expectStatus(500)
        .end((err, res, body) => {
          sinon.assert.calledOnce(_findAll);
          if (err) return done(err);
          done();
        });
      });

    });
  });

});
