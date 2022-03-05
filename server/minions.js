const express = require('express');
const { min } = require('mocha/lib/reporters');
const minionsRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');

const type = 'minions';


// Get all minions
minionsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(type));
})

// Create new minion
minionsRouter.post('/', (req, res, next) => {
    req.body.salary = Number(req.body.salary);
    if (req.body.name && req.body.title && req.body.salary) {
        const newMinion = addToDatabase(type, req.body);
        res.status(201).send(newMinion);
    } else {
        res.status(400).send('Invalid request');
    }
})

// Get minion by ID
minionsRouter.get('/:minionId', (req, res, next) => {
    const minion = getFromDatabaseById(type, req.params.minionId);
    if (minion) {
        res.send(minion);
    } else {
        res.status(404).send('Minion does not exist');
    }
})

// Updated minion by ID
minionsRouter.put('/:minionId', (req, res, next) => {})

// Delete minion by ID
minionsRouter.delete('/:minionId', (req, res, next) => {
    const deleted = deleteFromDatabasebyId(type, req.params.minionId);
    if (deleted) {
        res.status(204).send('Minion deleted');
    } else {
        res.status(404).send('Minion does not exist');
    }
})

module.exports = minionsRouter;