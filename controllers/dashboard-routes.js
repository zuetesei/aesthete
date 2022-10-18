const router = require('express').Router();
const { JSON } = require('sequelize');
const sequelize = require('../config/connection');
const { User, Image } = require('../models');

router.route('/')
    .get((req, res) => {

       
    
        console.log(req.session.loggedIn)
        if(!req.session.loggedIn){
            
            


            res.redirect('/home')
            return
        }
        Image.findAll({
            
            attributes: ['image_tag'],
            raw:true

        }).then(data=>console.log(data[1]))
        Image.findAll({
            where:{
                userId : req.session.user_id
            },
            attributes: ['image_tag'],
            raw:true

        }).then(data=>res.render('dashboard',{username:req.session.username,image_url:data}))
        
    })

// (1) get all images and display (dashboard.handlebars)
// (2) route to add image url page (addform.handlebars)
// (3) route to single image page (singleimage.handlebars)
module.exports = router