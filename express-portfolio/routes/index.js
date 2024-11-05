const express = require('express');
const router = express.Router();

// Home page route
router.get('/', (req, res) => {
    res.render('index', { title: 'Home' }); // Passes the title variable
});

// About page route
router.get('/about', (req, res) => {
    res.render('about', { title: 'About Me' });
});

// Projects page route
router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

// Contact page route
router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact Me' });
});

module.exports = router;


