const express = require('express');
const knex = require('../db');

var players = express.Router();

players.get('/', function(req, res, next) {
    res.status(200).json("Okay Connected");
})

players.get('/autoComplete', )

players.get('/:id', function(req, res, next) {
    knex('players')
        .where({player_id: req.params.id})
        .then( result => {
            console.log(result);
            if(result.length > 1) {
                res.status(400).json({message: "more than 1 found..."})
            } else {
                res.status(200).json(result[0]);
            }
        })
})

players.post('/:id', function(req, res, next) {
    res.status(201).json({'post': req.params.id});
})

module.exports.players = players;