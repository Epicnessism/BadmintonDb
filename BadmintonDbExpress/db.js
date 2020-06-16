// const env = 'development'
const env = 'prod'
const config = require('./knexfile')[env]
const connection = require('knex')(config)

module.exports = connection