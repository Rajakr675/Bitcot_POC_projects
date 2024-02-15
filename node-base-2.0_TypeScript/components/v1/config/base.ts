import { Request, Response } from 'express';
import { ErrorHandler } from '../../../utils';
import { constants } from '../../../config';
import { any } from 'joi';

export default async (req: Request, res: Response): Promise<void> => {
  try {
    const data = constants.default;

    log.info("Current date time", dt.currentTime()); // Make sure 'log' and 'dt' are imported and defined.

    res.success({ data });

  } catch (error) {
    res.status(500).send(ErrorHandler(error));
  }
};









// 'use strict';
// const {ErrorHandler} = require('../../../utils');
// const {constants} = require ('../../../config');


// module.exports = async (req, res) => { 
//     try {
//         const data = constants.baseConfig

//         log.info("Current date time", dt.currentTime())

//         return res.success({data});

//     } catch (error) {
//         return res.serverError(500, ErrorHandler(error));
//     }
// };