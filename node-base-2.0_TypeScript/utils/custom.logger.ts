import chalk from "chalk";
import { config as dotenvConfig } from "dotenv";
dotenvConfig({ path: `.env.${process.env.NODE_ENV}` });

import Rollbar from "rollbar";

const error = chalk.red;
const info = chalk.blue;
const warning = chalk.yellow;
const success = chalk.green;
const result = chalk.hex("#DEADED");

const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_API_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
});

class CustomLogger {
  info(tag: string, message?: string) {
    if (process.env.NODE_ENV === "development") {
      console.log(info(tag), message ? info(message) : "");
    }
  }

  error(tag: string, message?: string) {
    console.log(error(tag), message ? error(message) : "");
    const errorLog = tag + " " + (message ? message : "");
    rollbar.log(errorLog);
  }

  success(tag: string, message?: string) {
    console.log(success(tag), message ? success(message) : "");
  }

  warning(tag: string, message?: string) {
    console.log(warning(tag), message ? warning(message) : "");
  }

  object(tag: string, object?: any) {
    console.log(result(JSON.stringify(tag)), object ? result(JSON.stringify(object)) : "");
  }
}

export default CustomLogger;




// const chalk=require("chalk");
// const consoleLog = console.log;
// require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

// const error = chalk.red;
// const info = chalk.blue;
// const warning = chalk.yellow;
// const success = chalk.green;
// const result = chalk.hex('#DEADED');


// const Rollbar = require('rollbar')
// const rollbar = new Rollbar({
//   accessToken: process.env.ROLLBAR_API_KEY,
//   captureUncaught: true,
//   captureUnhandledRejections: true,
// })


// class CustomLogger {
//   info(tag, message) {
//     if (process.env.NODE_ENV === "development") consoleLog(info(tag),message ? info(message) : "");
//   }

//   error(tag,message) {
//     consoleLog(error(tag),message ? error(message) : "");
//     const errorLog = tag + " " +  message ? message : ""
//     rollbar.log(errorLog)
//   }

//   success(tag,message) {
//     consoleLog(success(tag),message ?success(message): "");
//   }

//   warning(tag,message) {
//     consoleLog(warning(tag),message ?warning(message): "");
//   }

//   object(tag,object) {
//     consoleLog(result(JSON.stringify(tag)),object ?result(JSON.stringify(object)): "");
//   }
// }

// module.exports = CustomLogger;
