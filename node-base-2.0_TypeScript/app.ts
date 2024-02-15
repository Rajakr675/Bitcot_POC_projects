import createError from 'http-errors';
import express, { Application, Request, Response, NextFunction } from 'express';
console.log(">>>>>>>>>>>>>");
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import dotenv from 'dotenv';

import responseMiddleWare from './middlewares/response.middleware';
import { allowCrossDomainRequests } from './middlewares/cors.middleware';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from './swagger.json';
import CustomLog from './utils/custom.logger';
import LuxonDateTime from './utils/date.time';
import { Router } from 'express';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
});

const app: Application = express();

app.use(responseMiddleWare);
app.use(allowCrossDomainRequests);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const customLog = new CustomLog();
(global as any).log = customLog;

const dateTime = new LuxonDateTime();
(global as any).dt = dateTime;

//Routes
const appRouter = require('./routes/v1'); // Assuming you have the necessary routes defined in this file.

app.use('/v1/config', appRouter.configRouter);
app.use('/v1/user', appRouter.userRouter);

// catch 404 and forward to error handler
app.use((req: Request, res: Response, next: NextFunction) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

export default app;







// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`
// });
 
// const app = express();

// const responseMiddleWare = require("./middlewares/response.middleware");
// app.use(responseMiddleWare);
// const cors = require("./middlewares/cors.middleware");
// app.use(cors.allowCrossDomainRequests);

// // view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'pug');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// //Custom log setup
// const CustomLog = require("./utils/custom.logger")
// const customLog = new CustomLog()
// global.log = customLog

// //Swagger setup
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
// app.use('/v1/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// //Luxon datetime setup
// const LuxonDateTime = require('./utils/date.time')
// const dateTime = new LuxonDateTime()
// global.dt = dateTime

// //Routes


// let appRouter = require("./routes/v1");

// app.use('/v1/config', appRouter.configRouter);    //This router goes to my routers.
// app.use('/v1/user', appRouter.userRouter);



// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });


// module.exports = app;
