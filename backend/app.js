const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const connectToDb = require('./db/db');

// Initialize the app
const app = express();

// Connect to the database
connectToDb();

// Middleware
app.use(cors());

// Routes
app.get('/', (req, res) => {
    res.send('Hello World');
});

module.exports = app;
