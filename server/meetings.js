const express = require('express');
const meetingsRouter = express.Router();

// Get all meetings
meetingsRouter.get('/', (req, res, next) => {})

// Create new meeting
meetingsRouter.post('/', (req, res, next) => {})


// Delete all meetings
meetingsRouter.delete('/', (req, res, next) => {})

module.exports = meetingsRouter;