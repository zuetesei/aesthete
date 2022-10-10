
const router = require('express').Router();
const userRoutes = require('./user-routes.js')


//collect the packaged api endpoints 
router.use('/users',userRoutes);

router.get('/user',(req,res)=>{
    res.send('index')
})

module.exports = router; 
