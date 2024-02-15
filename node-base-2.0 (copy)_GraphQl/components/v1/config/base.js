'use strict';
const {ErrorHandler} = require('../../../utils');
const {constants} = require ('../../../config');


module.exports = async (req, res) => { 
    try {
        const data = constants.baseConfig

        log.info("Current date time", dt.currentTime())

        return res.success({data});

    } catch (error) {
        return res.serverError(500, ErrorHandler(error));
    }
};