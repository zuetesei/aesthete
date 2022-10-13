const {Image,User} = require('../../models')
const imgRoutes =require('./img-routes')

const router = require('express').Router()

router.use('/img',imgRoutes)
module.exports = router