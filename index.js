const express = require('express');
const expressLayout = require('express-ejs-layouts');
const cookieParser = require('cookie-parser');
const port = 8000;
const db = require('./config/db')

const session = require('cookie-session');
const passport = require('passport');
const passportLocal = require('./config/passport')

const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(expressLayout);

app.use(cookieParser());

app.use(express.urlencoded());

app.use(session({
        name: "codial",
        secret: "abc",
        saveUninitilize: false,
        resave: false,
        cookie: {
            maxAge: 1000 * 60 * 100,
        }
    }
));

app.use(passport.initialize());

app.use(passport.session());

// app.use(passport.)

app.use('/', require('./router/index'))

app.listen(port, (err) =>{
    if(err){
        console.log(err);
    }
    console.log(`Server is running at port: ${ port }`);
});