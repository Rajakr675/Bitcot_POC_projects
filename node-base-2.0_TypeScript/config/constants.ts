"use strict";


const constants:any = Object.freeze({
  baseConfig: {
    test: "This is a test string",
    list: ["Item1", "Item2", "item3"],
  },
  error: {
    bodyEmpty: "Request body is required.",
  },
});

export default constants;






// const constants = Object.freeze({
//   baseConfig: {
//     test: "This is a test string",
//     list: ["Item1", "Item2", "item3"],
//   },
//   error: {
//     bodyEmpty: "Request body is required.",
//   },
// });

// module.exports = constants;
