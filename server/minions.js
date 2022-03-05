const express = require('express');
const minionsRouter = express.Router();

// Get all minions
minionsRouter.get('/', (req, res, next) => {})

// Create new minion
minionsRouter.post('/', (req, res, next) => {})

// Get minion by ID
minionsRouter.get('/:minionId', (req, res, next) => {})

// Updated minion by ID
minionsRouter.put('/:minionId', (req, res, next) => {})

// Delete minion by ID
minionsRouter.delete('/:minionId', (req, res, next) => {})

module.exports = minionsRouter;