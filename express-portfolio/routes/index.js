const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index'); // Renders index.ejs as the home page
});

// Other page routes
router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/projects', (req, res) => {
    res.render('projects');
});

router.get('/contact', (req, res) => {
    res.render('contact');
});

module.exports = router;

