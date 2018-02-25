"use strict";

/** Pool  route implementation
    @module routes/pool */



const Q                         = require("q"),
        _                       = require("lodash"),
        config              = require("config"),
        restifyErrors = require("restify-errors");

const dao                   = require("../dao"),
        common              = require("fm-common"),
        logger              = common.logger,
        utils               = require("./utils");


/** Executes Auto Pooling for an application
    @func _auto
    @param req {Object} Incoming request object
    @param res {Object} Outgoing response object
    @param next {Function} Next middleware function in the chain
  
*/
function _auto(req, res, next) {


}

module.exports = {
    auto:                        _auto
};
