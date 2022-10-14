const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const bodyparser = require('body-parser')
const {engine} = require('express-handlebars')

require('dotenv').config()
console.log(__dirname+'/public')
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// middleware
// app.use(express.json());
app.use( express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }));

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



