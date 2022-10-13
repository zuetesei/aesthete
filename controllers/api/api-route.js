const {Image,User} = require('../../models')

const router = require('express').Router()

router.route('/img')
.get((req,res)=>{
    res.send(Image.findAll())
})
.post((req,res)=>{
    Image.create(req.body)
})

router.route('/users')
.get((req,res)=>{
   User.findAll().then(data => res.send(data))
})
.post((req,res)=>{
    User.create(req.body)
})

module.exports = router