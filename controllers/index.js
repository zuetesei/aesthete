const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const loginRoute = require('./loginRoute')
const signoutRoute = require('./signout-routes')
const signupRoute =  require('./signup-routes')

router.use('/home', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login',loginRoute)
router.use('/signout',signoutRoute)
router.use('/signup',signupRoute)

router.get('/', (req, res) => {
    // res.status(404).end();
    res.redirect('/home')

});

module.exports = router;