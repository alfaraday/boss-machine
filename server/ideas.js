const express = require('express');
const ideasRouter = express.Router();
const { getAllFromDatabase, getFromDatabaseById, addToDatabase, updateInstanceInDatabase, deleteFromDatabasebyId } = require('./db');

const type = 'ideas';

// Get all ideas
ideasRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(type));
})

// Create new idea
ideasRouter.post('/', (req, res, next) => {})

// Get idea by ID
ideasRouter.get('/:ideaId', (req, res, next) => {})

// Updated idea by ID
ideasRouter.put('/:ideaId', (req, res, next) => {})

// Delete idea by ID
ideasRouter.delete('/:ideaId', (req, res, next) => {})

module.exports = ideasRouter;