const router =  require('express').Router()

router.route('/')
.get((req,res)=>{
    res.send('image api')
})
.post((req,res)=>{
    console.log(req)
    res.send(req.url)
})

module.exports = router