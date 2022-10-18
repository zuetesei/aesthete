// user-facing routes: homepage & log-in
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Image } = require('../models');

router.route('/')
    .get((req, res) => {
        if (req.session.loggedIn) {
            res.redirect('/dashboard')
            return;
        }
        res.render('homepage')
    })

module.exports = router