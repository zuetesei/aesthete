const express = require('express');
const routes = require('./routes/api');
const sequelize = require('./config/connection');
const path = require('path');

require('dotenv').config()
console.log(process.env.DB_PASSWORD)

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on routes
app.use('/',routes);
// app.get('/',(req,res)=>{
//     res.send('loggin page')
// })

// turn on connection to db and server 
// if force:true, drop and re-create all of the database tables on startup
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});

