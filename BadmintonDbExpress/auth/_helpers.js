const bcrypt = require('bcrypt');

let env = 'development';
let config = require('../knexfile.js')[env]
knex = require('knex')(config)


function comparePass(userPassword, databasePassword) {
    return bcrypt.compareSync(userPassword, databasePassword);
}

function createUser (req) {
    console.log("got here");
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    return knex('users').where({username: req.body.username})
    .insert({
        username: req.body.username,
        password: hash,
        player_id: req.body.player_id
    })
    .returning('*');
}

function loginRequired(req, res, next) {
    console.log(req.user);
    if (!req.user) return res.status(401).json({status: 'Please log in'});
    return next();
}

module.exports = {
  comparePass,
  createUser,
  loginRequired
};