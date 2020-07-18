const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
let env = 'development';
let config = require('../knexfile.js')[env]
knex = require('knex')(config)
const authHelpers = require('./_helpers');

const options = {};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
    console.log("inside check if username exists");
  // check to see if the username exists
  knex('users').where({ username }).first()
  .then((user) => {
    console.log(user);
    console.log(password);
    if (user == undefined) return done(null, false)
    if (!user) return done(null, false);
    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch((err) => { return done(err); });
}));

module.exports = passport;