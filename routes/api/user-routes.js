const router = require('express').Router();
const { User } = require('../..models');


// Dennis is working on routes 
// Notes on what routes we need 

// GET /api/users
router.get('/', (req, res) => {
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
});

// GET a single user using id 

// POST or create a user 

// UPDATE user name or password 

// DELETE user 