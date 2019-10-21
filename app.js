const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const config = require('./config.database');
const app = express();

mongoose.connect(config.datanase);
let db = mongoose.connection();

// Checck connection
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Check for db errors
db.on('error', (err) => {
    console.log(err);
});

// Load models
let Article = require('./models/article');

// Load view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
// Parse application/json
app.use(bodyParser.json());

// Set public folder
app.use(express.static(path.join(__dirname), '/public'));

/**
 * Test page
 */
app.get('/', (req, res) => {
    res.send('Hello World');
});

/**
 * GET - Login page
 */
app.get('/login', (req, res) => {
    res.send('Login-Page');
});

/**
 * GET - Register page
 */
app.get('/register', (req, res) => {
    res.send('Register-Page');
});

/**
 * POST - Register page
 */
app.post('/register', (req, res) => {
    res.send('Register-Page');
});

/**
 * This is the route for 404 errors
 */
app.get('*', (req, res) => {
    res.send('Page not found', 404);
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});