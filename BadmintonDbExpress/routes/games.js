const express = require('express');
const knex = require('../db');
const games = express.Router();
const authHelpers = require('../auth/_helpers');
var moment = require('moment'); // require

games.get('/', function (req, res, next) {
    res.status(200).json("Okay Connected");
})

//get game by game_id
games.get('/:id', authHelpers.loginRequired, function (req, res, next) {
    knex('games')
        .where({ game_id: req.params.id })
        .then(result => {
            console.log(result);
            if (result.length > 1) {
                res.status(400).json({ message: "more than 1 found..." })
            } else {
                res.status(200).json(result[0]);
            }
        })
})

//get last x minutes of games
games.get('/recent/:minutes', authHelpers.loginRequired, function (req, res, next) {
    knex('games')
        .select(['*',
        'p1a.given_name as p1a_given_name','p1a.family_name as p1a_family_name', 
        'p1b.given_name as p1b_given_name', 'p1b.family_name as p1b_family_name',
        'p2a.given_name as p2a_given_name', 'p2a.family_name as p2a_family_name',
        'p2b.given_name as p2b_given_name', 'p2b.family_name as p2b_family_name',
    ])
        .from('games as g')
        .leftJoin('players as o', 'g.points_1', 'o.id')
        .leftJoin('players as p1a', 'g.player_id_1A', 'p1a.id')
        .leftJoin('players as p1b', 'g.player_id_1B', 'p1b.id')
        .leftJoin('players as p2a', 'g.player_id_2A', 'p2a.id')
        .leftJoin('players as p2b', 'g.player_id_2B', 'p2b.id')
        .where('updated_at', '>=', moment().subtract(req.params.minutes, 'm'))
        .orderBy('updated_at', 'desc')
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
})

//get x minutes of games
games.get('/recentBetween/:newest_minutes/:oldest_minutes', authHelpers.loginRequired, function (req, res, next) {
    knex('games')
        .whereBetween('updated_at', [moment().subtract(req.params.oldest_minutes, 'm'), moment().subtract(req.params.newest_minutes, 'm')])
        .orderBy('updated_at', 'desc')
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
})

//insert a new game
games.post('/', authHelpers.loginRequired, function (req, res, next) {
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
    console.log(typeof req.body.player_id_1A);
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