const express = require('express');
const route = express.Router();
const homeController = require('../controller/index.js');

console.log("Route is working");

route.get('/', homeController.home);

route.use('/user/', require('./user'));

module.exports = route;