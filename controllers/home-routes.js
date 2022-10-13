// user-facing routes: homepage & log-in
const router = require('express').Router();
const sequelize = require('../config/connection');
const { User, Image } = require('../models');

// (1) user not logged in, render homepage 

// (2) route to log in & sign up page 
