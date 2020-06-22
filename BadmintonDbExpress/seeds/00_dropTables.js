'use strict'

exports.seed = function (knex, Promise) {
    //deletes all existing entries
    return knex('games').del()
        .then( () => knex('tournaments').del() )
        .then( () => knex('players').del() )
}