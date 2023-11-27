// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");
const proxy = require('express-http-proxy');

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware !
require("./config")(app);

// Proxy to microservices
app.use('/api', proxy(process.env.MS_API || 'http://localhost:5011'));
app.use('/user', proxy(process.env.MS_USER || 'http://localhost:5012'));
app.use('/experiences', proxy(process.env.MS_EXPERIENCES || 'http://localhost:5013'));
app.use('/projects', proxy(process.env.MS_PROJECTS || 'http://localhost:5014'));
app.use('/skills', proxy(process.env.MS_SKILLS || 'http://localhost:5015'));

// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
