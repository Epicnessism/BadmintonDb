require("dotenv").config();

var express = require('express');
var passport = require("passport");
var LocalStrategy = require('passport-local').Strategy;
var session = require("express-session");

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let cors = require('cors');

var app = express();

//* This is the cors magic shit here
// app.use(cors());
// app.use(cors({
//     origin: [
//         "http://localhost:4200"
//     ], credentials: true
// }));
app.use(cors({
    origin: [
        'http://3.132.178.65:4200'
    ], credentials: true
}));
// app.use(cors({
//     origin: [
//         process.env.FRONT_END_CORS
//     ], credentials: true
// }));

app.options('*', cors());

//! more passport stuff
app.use( session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUnintialized: false,
    cookie: {
        expires: 10800000, //3 hours
        httpOnly: false
    }
}));

app.use(passport.initialize());
app.use(passport.session());


//? not sure what all this shit does
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get('/', function(req,res,next) {
    res.status(200).json({something: "something here"})
})

app.use('/players', require('./routes/players').players);
app.use('/games', require('./routes/games').games);
app.use('/auth', require('./routes/auth').auth);

app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    // res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.json({error: "Error"})

})


module.exports = app;
