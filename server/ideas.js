const express = require('express');
const ideasRouter = express.Router();

// Get all ideas
ideasRouter.get('/', (req, res, next) => {})

// Create new idea
ideasRouter.post('/', (req, res, next) => {})

// Get idea by ID
ideasRouter.get('/:ideaId', (req, res, next) => {})

// Updated idea by ID
ideasRouter.put('/:ideaId', (req, res, next) => {})

// Delete idea by ID
ideasRouter.delete('/:ideaId', (req, res, next) => {})

module.exports = ideasRouter;