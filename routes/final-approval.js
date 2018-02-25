"use strict";

/** Final Approval route implementation
    @module routes/application */



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


}

/** Creates a deposit
    @func _save
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _save(req, res, next) {

}

/** Updates a deposit
    @func _reset
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _reset(req, res, next) {

}

/** Gets the latest record by application container
    @func _latest
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _latest(req, res, next) {

}

/** Gets the next type of final approval process
    @func _next
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
*/
function _next(req, res, next) {

}

module.exports = {
    list:                        _list,
    retrieve:                    _retrieve,
    save:                        _save,
    reset:                       _reset,
    latest:                      _latest,
    next:                        _next,
};
