// import { Request, Response, NextFunction } from 'express';
import { constants } from '../config';

const middleware = (req:any, res: any, next: any): void => {
    res.success = (data: any): Response => {
        return res.status(200).json({ success: true, ...data });
    };

    res.serverError = (code: number, data: any): Response => {
        return res.status(code).json({ success: false, message: data, code });
    };

    res.unauthorized = (): Response =>
        res.status(401).json({
            success: false,
            message: constants,
            code: 400,
        });

    next();
};

export default middleware;




// 'use strict';
// const {constants} = require('../config');
// module.exports = (req, res, next) => {
//     res.success = data => {
//         return res.status(200).json({success: true, ...data});
//     }; 
//     res.serverError = (code, data) => {
//         return res.status(code).json({success: false, message: data, code});    
//     };
//     res.unauthorized = () => res.status(401).json({
//         success: false,
//         message: constants.error.auth.unauthorized,
//         code: 400
//     });
//     next();
// };
