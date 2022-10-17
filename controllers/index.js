const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
const loginRoute = require('./login-routes')
const signoutRoute = require('./signout-routes')

router.use('/home', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login',loginRoute)
router.use('/signout',signoutRoute)

router.get('/', (req, res) => {
    // res.status(404).end();
    res.redirect('/home')

});

module.exports = router;