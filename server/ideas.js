const express = require('express');
const ideasRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');

const type = 'ideas';

// Validate idea exists
ideasRouter.param('ideaId', (req, res, next, id) => {
    const idea = getFromDatabaseById(type, id);
    if (idea) {
        req.idea = idea;
        next();
    } else {
        res.status(404).send('Idea does not exist');
    }
})

// Get all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(type));
})

// Create new idea
ideasRouter.post('/', (req, res, next) => {
    req.body.numWeeks = Number(req.body.numWeeks);
    req.body.weeklyRevenue = Number(req.body.weeklyRevenue);
    if (req.body.description && req.body.name && req.body.numWeeks && req.body.weeklyRevenue) {
        const newIdea = addToDatabase(type, req.body);
        res.status(201).send(newIdea);
    } else {
        res.status(400).send('Invalid request');
    }
})

// Get idea by ID
ideasRouter.get('/:ideaId', (req, res, next) => {
    res.send(req.idea);
})

// Updated idea by ID
ideasRouter.put('/:ideaId', (req, res, next) => {})

// Delete idea by ID
ideasRouter.delete('/:ideaId', (req, res, next) => {})

module.exports = ideasRouter;