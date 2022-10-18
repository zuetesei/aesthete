
const router = require('express').Router();
const userRoutes = require('./user-routes.js');
// const imgRoutes = require('./img-routes.js');
const apiRoutes = require('./img-routes')
const loginRoute = require('./login-routes')


//collect the packaged api endpoints 
router.use('/user', userRoutes);
router.use('/img', apiRoutes);
router.use('/login',loginRoute)

// router.use('/api',apiRoutes)

router.get('/', (req, res) => {
    res.send('index')
})

module.exports = router; 
