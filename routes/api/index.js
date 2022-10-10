
const router = require('express').Router();
const userRoutes = require('./user-routes.js')


//collect the packaged api endpoints 
router.use('/api',userRoutes);

router.get('/',(req,res)=>{
    res.send('index')
})

module.exports = router; 
