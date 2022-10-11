const router = require('express').Router()

router.route('/')
.get((req,res)=>{
    res.send('you made it to post route')
})
.post((req,res)=>{
    
})
module.exports =router