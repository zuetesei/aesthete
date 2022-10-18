const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const bodyparser = require('body-parser')
const { engine } = require('express-handlebars')
require('dotenv').config()
const { DB_PASSWORD } = process.env

console.log(__dirname + '/public')
const app = express();
const PORT = process.env.PORT || 3001;

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// middleware
// app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
const session = require('express-session');

const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: DB_PASSWORD,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));
app.use(bodyparser.json())

// turn on routes
app.use('/', routes);

// turn on connection to db and server 
// if force:true, drop and re-create all of the database tables on startup
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on http://localhost:${PORT}`));
});



