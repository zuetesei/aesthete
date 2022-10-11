
const router = require('express').Router();
const apiRoutes = require('./api-route')
const users = require('../users')
const login = require('../login')


//collect the packaged api endpoints 
router.use('/api',apiRoutes);
router.use('/users',users)
router.use('/login',login)


router.get('/',(req,res)=>{
    res.send('index')
})

module.exports = router; 
