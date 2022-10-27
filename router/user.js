const express = require('express');
const passport = require('passport')
const homeController  = require('../controller/index');
const route = express.Router();

route.get('/signup', homeController.signup);

route.post('/signup', homeController.signupDone);

route.get('/signin', homeController.signin);

route.post('/signin', passport.authenticate(
    'local',
    {failureRedirect: '/user/signin'},
), homeController.createSession);

route.get('/login', homeController.login);

module.exports = route;