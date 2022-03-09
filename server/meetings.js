const express = require('express');
const meetingsRouter = express.Router();
const { getAllFromDatabase, addToDatabase, deleteAllFromDatabase } = require('./db');

const type = 'meetings';

// Get all meetings
meetingsRouter.get('/', (req, res, next) => {
    res.send(getAllFromDatabase(type));
})

// Create new meeting
meetingsRouter.post('/', (req, res, next) => {})


// Delete all meetings
meetingsRouter.delete('/', (req, res, next) => {})

module.exports = meetingsRouter;