const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const bodyparser = require('body-parser')

require('dotenv').config()

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.json())
// turn on routes
app.use('/', routes);
// app.get('/',(req,res)=>{
//     res.send('loggin page')
// })

// turn on connection to db and server 
// if force:true, drop and re-create all of the database tables on startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});

