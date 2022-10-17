const router = require('express').Router();
const { User, Image } = require('../../models');
const bcrypt = require('bcrypt');

router.use('/post', require('./img-routes'))

function  hash(newpass){
    return bcrypt.hash(newpass,10)
}

// // GET all users at /api/users

router.route('/')
.get((req, res) => {
    User.findAll().then(data => res.json(data)).catch(err=>{
        console.log(err)
        res.status(500).json(err)

    })
})
.post((req,res)=>{
    User.create(req.body).then(dbUserData => {
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.loggedIn = true;
      
          res.json(dbUserData);
        });
      })
      res.redirect('/dashboard')
      console.log(req.session.loggedIn)
})




// router.route('/users')
//     .get((req, res) => {
//         // Access our User model and run .findAll() method)
//         User.findAll({
//             // protect password
//             attributes: { exclude: ['password'] }
//         })
//             .then(dbUserData => res.json(dbUserData))
//             .catch(err => {
//                 console.log(err);
//                 res.status(500).json(err);
//             });
//     })
//     .post((req, res) => {
//         console.log(req.body)
//     })

// // GET a single user using id 

// router.put('/users/:id', (req, res) => {
//     // expects {username: 'Lernantino', email: 'lernantino@gmail.com', password: 'password1234'}

//     // pass in req.body instead to only update what's passed through
//     User.update(req.body, {
//         individualHooks: true,
//         where: {
//             id: req.params.id
//         }
//     });
// });

// POST /api/users (sign-up function)
// router.post('/', (req, res) => {
//     User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: req.body.password
//     })
//         .then(dbUserData => {
//             req.session.save(() => {
//                 req.session.user_id = dbUserData.id;
//                 req.session.username = dbUserData.username;
//                 req.session.loggedIn = true;

//                 res.json(dbUserData);
//             });
//         })
// });

// POST /login 
// router.post('/login', (req, res) => { });

// POST /logout 
// router.post('/logout', (req, res) => { });

module.exports = router;