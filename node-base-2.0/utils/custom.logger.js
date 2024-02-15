const chalk=require("chalk");
const consoleLog = console.log;
require("dotenv").config({ path: `.env.${process.env.NODE_ENV}` });

const error = chalk.red;
const info = chalk.blue;
const warning = chalk.yellow;
const success = chalk.green;
const result = chalk.hex('#DEADED');


const Rollbar = require('rollbar')
const rollbar = new Rollbar({
  accessToken: process.env.ROLLBAR_API_KEY,
  captureUncaught: true,
  captureUnhandledRejections: true,
})


class CustomLogger {
  info(tag, message) {
    if (process.env.NODE_ENV === "development") consoleLog(info(tag),message ? info(message) : "");
  }

  error(tag,message) {
    consoleLog(error(tag),message ? error(message) : "");
    const errorLog = tag + " " +  message ? message : ""
    rollbar.log(errorLog)
  }

  success(tag,message) {
    consoleLog(success(tag),message ?success(message): "");
  }

  warning(tag,message) {
    consoleLog(warning(tag),message ?warning(message): "");
  }

  object(tag,object) {
    consoleLog(result(JSON.stringify(tag)),object ?result(JSON.stringify(object)): "");
  }
}

module.exports = CustomLogger;
