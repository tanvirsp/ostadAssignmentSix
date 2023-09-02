const express = require('express');
const app = express();
const route = require('./src/routes/api')


app.use("/api", route)

module.exports = app;