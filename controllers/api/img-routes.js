const router = require('express').Router()
const {Image, User} = require('../../models')


// GET ALL users 
router.route('/')
.get((req ,res)=>{
    Image.findAll().then(data=> res.send(data))
})
.post((req,res)=>{
    Image.create(req.body).then(res.send(res.url))
})

module.exports = router