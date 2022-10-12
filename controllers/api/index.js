
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const imgRoutes = require('./img-routes.js');

//collect the packaged api endpoints 
router.use('/user', userRoutes);
router.use('/img', imgRoutes);

router.get('/', (req, res) => {
    res.send('index')
})

module.exports = router; 
