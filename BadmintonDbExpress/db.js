const env = 'development'
// let env = 'production'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = connection