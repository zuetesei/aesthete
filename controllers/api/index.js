
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
// const imgRoutes = require('./img-routes.js');
const apiRoutes = require('./api-route')

//collect the packaged api endpoints 
router.use('/user', userRoutes);
router.use('/img', apiRoutes);
router.use('/api',apiRoutes)

router.get('/', (req, res) => {
    res.send('index')
})

module.exports = router; 
