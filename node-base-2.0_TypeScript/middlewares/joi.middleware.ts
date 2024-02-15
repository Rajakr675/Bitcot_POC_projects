import { Request, Response, NextFunction } from 'express';
import { ErrorHandler } from '../utils';
import { constants } from '../config';

type JoiSchema = any; // Replace 'any' with the actual Joi schema type

const joiQueryMiddleware = (schema: JoiSchema, key?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestBody = key ? req.query[key] : req.query;
      const { error } = schema.validate(requestBody);
      if (error) {
        res.status(400).json(ErrorHandler(error));
      } else {
        next();
      }
    } catch (err) {
      res.status(400).json(ErrorHandler(err));
    }
  };
};

const joiBodyMiddleware = (schema: JoiSchema, key?: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const requestBody = key ? req.body[key] : req.body;
      if (!requestBody) {
        res.status(400).json(ErrorHandler(constants));
      } else {
        const { error } = schema.validate(requestBody);
        if (error) {
          res.status(400).json(ErrorHandler(error));
        } else {
          next();
        }
      }
    } catch (err) {
      res.status(404).json({ error: ErrorHandler(err) });
    }
  };
};

export { joiQueryMiddleware, joiBodyMiddleware };







// const {ErrorHandler} = require('../utils');
// const {constants} = require('../config');

// module.exports.joiQueryMiddleware = (schema, key) => {
//     return (req, res, next) => {
//         try {
//             let requestBody = req.query;
//             if (key) {
//                 requestBody = req.query[key];
//             }
//             const {
//                 error
//             } = schema.validate(requestBody);
//             if (error) {
//                 res.serverError(400, ErrorHandler(error));
//             } else
//                 next();
//         } catch (err) {
           
//              res.serverError(400, ErrorHandler(err));
//         }
//     };
// };

// module.exports.joiBodyMiddleware = (schema, key) => {
//     return (req, res, next) => {
//         try {
//             let requestBody = req.body;
//             if (key) {
//                 requestBody = req.body[key];
//             }
//             if (!requestBody) {
//                 res.serverError(400, ErrorHandler(constants.error.bodyEmpty));
//             } else {
//                 const {
//                     error
//                 } = schema.validate(requestBody);
//                 if (error) {
//                     res.serverError(400, ErrorHandler(error));
//                 } else
//                     next();
//             }
//         } catch (err) {
//             res.serverError(404, {
//                 error: ErrorHandler(err)
//             });
//         }
//     };
// };