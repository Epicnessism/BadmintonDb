const express = require('express');
const knex = require('../db');

var games = express.Router();

games.get('/', function (req, res, next) {
    res.status(200).json("Okay Connected");
})

//get game by game_id
games.get('/:id', function (req, res, next) {
    knex('players')
        .where({ id: req.params.id })
        .then(result => {
            console.log(result);
            if (result.length > 1) {
                res.status(400).json({ message: "more than 1 found..." })
            } else {
                res.status(200).json(result[0]);
            }
        })
})

//insert a new game
games.post('/', function (req, res, next) {
    console.log(req.body);

    if (req.body.new_set == null) {//new game, find new set_id
        knex('games')
            .max('set_id')
            .then(result => {
                req.body.set_id = result[0].max + 1;
                insertGameReturnResponse(res, req);
            })
    } else { // has existing ID, so just insert
        insertGameReturnResponse(res, req);
    }
})

function insertGameReturnResponse(res, req) {
    knex('games')
    .insert({
        player_id_1A: req.body.player_1A,
        player_id_1B: req.body.player_1B != "" ? req.body.player_1B : null,
        player_id_2A: req.body.player_2A,
        player_id_2B: req.body.player_2B != "" ? req.body.player_2B : null,
        set_id: req.body.set_id,
        points_1: req.body.points_1,
        points_2: req.body.points_2
    }, "*")
    .then(result => {
        console.log("result after insert: ", result);
        if (result.length > 1) {
            res.status(400).json({ message: "more than 1 found..." })
        } else {
            res.status(200).json(result[0]); //successfully inputted game record
        }
    })
}

module.exports.games = games;