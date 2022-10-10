const router = require('express').Router();
const { User } = require('../../models');




// Dennis is working on routes 
// Notes on what routes we need 
router.use('/post',require('./post-route'))

// GET /api/users
router.route('/users')
.get((req, res) => {
    // Access our User model and run .findAll() method)
    User.findAll({
        // protect password
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
})
.post((req,res)=>{
    console.log(req.body)
})

// GET a single user using id 
router.put('/users/:id', (req, res) => {
    // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

    // pass in req.body instead to only update what's passed through
    User.update(req.body, {
        individualHooks: true,
        where: {
            id: req.params.id
        }
    });
});

// POST route creates a user 

// LOG IN route 
router.post('/login', (req, res) => { });

// UPDATE user name or password 

// DELETE user

module.exports = router