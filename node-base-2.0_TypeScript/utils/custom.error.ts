import { any } from 'joi';
// import  Constants  from '../config'; // Assuming the correct path for the config file

export function ErrorHandler(error: any): string | undefined {
  console.log('error', 'error in custom handler is');

  let errRes: string | undefined = error;

  if (error) {
    if (error.isJoi) {
      errRes = error.details
        .map((d: any) => d.message)
        .join(', ')
        .replace(/"/g, '');
    } else if (error instanceof Error && typeof error === 'object') {
      try {
        errRes = error.message;
      } catch (e) {
        errRes = undefined;
      }
    } else if (typeof error === 'string' || error instanceof String) {
      errRes = undefined;
    }
  }

  console.log('objecterror', errRes);
  return errRes;
}






// 'use strict';
// // Custom error handler
// const {constants} = require('../config')


// module.exports.ErrorHandler = (error) => {   
//     console.log('error','error in custom handler is')  
//     let errRes = error;
//     if (error) {
//         if (error.isJoi) {
//             errRes = error.details
//                 .map(d => d.message)
//                 .join(', ')
//                 .replace(/"/g, '');
//         } else if (error instanceof Error && typeof error === 'object') {
//             try {
//                 errRes = error.message;
//             } catch (e) {
//                 errRes = undefined;
//             }
//         } else if (typeof error === 'string' || error instanceof String) {
//             errRes = error;
//         }
//     }
//     console.log('objecterror',errRes) 
//     return errRes;
// };
