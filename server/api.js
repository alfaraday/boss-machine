const express = require('express');
const app = require('../server');
const apiRouter = express.Router();

const minionsRouter = require('./minions.js');
app.use('/minions', minionsRouter);

const ideasRouter = require('./ideas.js');
app.use('/ideas', ideasRouter);

module.exports = apiRouter;
