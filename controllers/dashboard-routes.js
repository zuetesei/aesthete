const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Image } = require('../models');

router.route('/')
    .get((req, res) => {
        console.log(req.session.loggedIn)
        if(!req.session.loggedIn){
            
            res.redirect('/home')
            return
        }
        res.render('dashboard',{Username:req.session.username})
    })

// (1) get all images and display (dashboard.handlebars)
// (2) route to add image url page (addform.handlebars)
// (3) route to single image page (singleimage.handlebars)
module.exports = router