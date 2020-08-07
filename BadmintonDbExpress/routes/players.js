const express = require('express');
const knex = require('../db');
const authHelpers = require('../auth/_helpers');
const players = express.Router();

players.get('/', function(req, res, next) {
    res.status(200).json("Okay Connected");
})

//grab players by substring or all
players.get('/autoComplete/:substring', authHelpers.loginRequired, function(req, res, next) {
    console.log(req.params.substring);
    if (req.params.substring == 'all') {
        knex('players')
        .select('id', 'given_name', 'family_name')
        .then( result => {
            console.log(result);
            res.status(200).json(result);
        })
    } else {
        // let temp = `%${req.params.substring}%`
        // console.log(temp);
        knex('players')
        .select('id', 'given_name', 'family_name')
        .where('given_name', 'like', `%${req.params.substring.toLowerCase()}%`)
        .then( result => {
            console.log(result);
            res.status(200).json(result);
        })
    }
} )

//get player by it's id
players.get('/:id', authHelpers.loginRequired , function(req, res, next) {
    knex('players')
        .where({id: req.params.id})
        .then( result => {
            console.log(result);
            if(result.length > 1) {
                res.status(400).json({message: "more than 1 found..."})
            } else {
                res.status(200).json(result[0]);
            }
        })
})

//create player
players.post('/:id', authHelpers.loginRequired , function(req, res, next) {
    res.status(201).json({'post': req.params.id});
})

players.get('/notifications/active', authHelpers.loginRequired, function(req, res, next) {
    console.log(req.user.player_id);
    knex('game_notifications')
    .where({player_id: req.user.player_id})
    .then( result => {
        console.log(result);
        res.status(200).json(result);
    })
    
})

module.exports.players = players;