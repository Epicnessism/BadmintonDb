const env = 'development'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = connection