const express = require('express');
const minionsRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');


// Get all minions
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase('minions'));
})

// Create new minion
minionsRouter.post('/', (req, res, next) => {
    req.body.salary = Number(req.body.salary);
    if (req.body.name && req.body.title && req.body.salary) {
        const newMinion = addToDatabase('minions', req.body);
        res.status(201).send(newMinion);
    } else {
        res.status(400).send('Invalid request');
    }
})

// Get minion by ID
minionsRouter.get('/:minionId', (req, res, next) => {})

// Updated minion by ID
minionsRouter.put('/:minionId', (req, res, next) => {})

// Delete minion by ID
minionsRouter.delete('/:minionId', (req, res, next) => {})

module.exports = minionsRouter;