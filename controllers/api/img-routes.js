const router = require('express').Router()

// GET ALL users 
router.get('/', (req, res) => {
    console.log('All users loading..');
})

router.route('/')
    .get((req, res) => {
        res.send('you made it to post route')
    })

module.exports = router