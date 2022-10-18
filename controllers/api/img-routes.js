const router = require('express').Router()
const {Image, User} = require('../../models')


// GET ALL users 
router.route('/')
.get((req ,res)=>{
    Image.findAll({
    }).then(data=> res.json(data))
})
.post((req,res)=>{
    const {image_tag} = req.body
    console.log(image_tag,req.session.user_id)
    Image.create({image_tag:image_tag,userId:req.session.user_id}).then(res.send(req.url))
})

module.exports = router