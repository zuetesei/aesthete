
const router = require('express').Router()
const userApiRoute = require('./user-routes')
const imgeApiRoute = require('./image-routes')
const postApiRoute = require('./post-routes')

router.use('/users',userApiRoute)
router.use('/image',imgeApiRoute)
router.use('/post',postApiRoute)

router.get('/',(req,res)=>{
    res.send('are you lost')
})
router.get('/:tag',(req,res)=>{
    res.send(`we have no api for ${req.params.tag}`)
})

module.exports = router