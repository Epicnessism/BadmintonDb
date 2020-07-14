const express = require('express');
var auth = express.Router();

const authHelpers = require('../auth/_helpers');
const passport = require('../auth/local');

auth.post('/register', (req, res, next)  => {
    // console.log("got here");
    return authHelpers.createUser(req, res)
        .then((response) => {
            console.log(response);
            passport.authenticate('local', (err, user, info) => {
                console.log('got hjere??');
                console.log(user);
                if (user) { handleResponse(res, 200, 'success'); }
                else {
                    handleResponse(res, 500, 'error'); 
                }
            })(req, res, next);
        })
        .catch((err) => { 
            // console.log(err);
            if (err.constraint == 'users_username_unique') {
                handleResponse(res, 400, 'username already exists');     
            } else {
                console.log(err);
                handleResponse(res, 500, 'error'); 
            }
            
        });
});


auth.post('/login', (req, res, next) => {
    passport.authenticate('local',  (err, user, info) => {
        console.log('user: '+ user);
        console.log('info: '+ info);
        if (err) {
            console.log('error: '+ err);
            handleResponse(res, 500, 'error');
        }
        if (!user) {
            handleResponse(res, 404, 'User not found.');
        }
        if (user) {
            req.logIn(user, function(err) {
                if(err) {
                    handleResponse(res, 500, 'some kind of error');
                }
                handleResponse(res, 200, 'logged in?');
            });
        }
    })(req, res, next);
});


auth.get('/logout', authHelpers.loginRequired ,(req, res, next) => {
    req.logout();
    handleResponse(res, 200, 'logged out');
});

auth.get('/authenticate', authHelpers.loginRequired, (req, res, next) => {
    handleResponse(res, 200, 'authenticated');
});


function handleResponse(res, code, statusMsg) {
  res.status(code).json({status: statusMsg});
}

module.exports.auth = auth;