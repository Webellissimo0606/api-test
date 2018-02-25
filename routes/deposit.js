"use strict";

/** Deposit route implementation
    @module routes/deposit */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Retrieve a deposit
    @func _retrieve
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _retrieve(req, res, next) {


}

/** Lists deposits for a loan
    @func _list
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain

*/
function _list(req, res, next) {

   let errorFields = _.filter([
                               !utils.ci(req.params.id) && 'id',
                               ], x => x);

   if (errorFields.length > 0) {
     return next(new restifyErrors.BadRequestError(errorFields.join()));
   }

   let w = {
     loanId : utils.fi(req.params.id)
   };

   return dao.v8.Deposit.findAll({
     where: w
   })
   .then(deposits => {

     if (!deposits || (deposits && deposits.length === 0)) {
       return next(new restifyErrors.NotFoundError(`Data for Loan id ${req.params.id} does not exist`));
     }

     res.send(deposits);
     return next();
   })
   .catch(next)
   .done();

}

/** Creates a deposit
    @func _create
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _create(req, res, next) {

}

/** Updates a deposit
    @func _update
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _update(req, res, next) {

}

/** Deletes a Deposit
    @func _delete
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _delete(req, res, next) {

}

module.exports = {
    list:                        _list,
    retrieve:                    _retrieve,
    create:                      _create,
    update:                      _update,
    delete:                      _delete,
};
