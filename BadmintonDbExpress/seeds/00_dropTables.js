'use strict'

exports.seed = function (knex, Promise) {
    //deletes all existing entries
    return knex('tournaments').del()
        .then( () => knex('players').del() )
}