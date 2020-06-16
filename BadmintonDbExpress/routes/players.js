const express = require('express');
const knex = require('../db');

var players = express.Router();

players.get('/', function(req, res, next) {
    res.status(200).json("Okay Connected");
})

players.get('/:id', function(req, res, next) {
    res.status(200).json({'body': req.params.id});
})

players.post('/:id', function(req, res, next) {
    res.status(201).json({'post': req.params.id});
})

module.exports.players = players;