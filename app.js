const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

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