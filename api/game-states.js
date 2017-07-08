const express = require('express');

const router = express.Router();

const queries = require('../db/queries');

function isValidId(req, res, next) {
    if(!isNaN(req.params.id)) return next();
    next(new Error('Invalid ID'));
}

function validGameState(gameState) {
    const hasPlayerName = typeof gameState.playerName == 'string' && gameState.playerName.trim() != '';
    const hasData = typeof gameState.gasLevel == 'number' && typeof gameState.ventAmount == 'number' && typeof gameState.resources == 'number';
    return hasPlayerName && hasData
}

router.get('/', (req, res) => {
    queries.getAll().then(gameStates => {
        res.json(gameStates)
    });
});

router.get('/:id', isValidId, (req,res, next) => {
    queries.getOne(req.params.id).then(gameState => {
        if(gameState) {
            res.json(gameState);
        } else {
            next();
        }
    });
});

router.post('/', (req, res, next) => {
    if(validGameState(req.body)) {
        queries.create(req.body).then(gameStates => {
            res.json(gameStates[0]);
        })
    } else {
        next(new Error('Invalid gamestate'))
    }
});
router.put('/:id', isValidId, (req, res, next) => {
    if(validGameState(req.body)) {
        queries.update(req.params.id, req.body).then(gameStates => {
            res.json(gameStates[0]);
        });
    } else {
        next(new Error('Invalid gamestate'));
    }
});
router.delete('/:id', isValidId, (req, res) => {
    queries.delete(req.params.id).then(() => {
        res.json({
            deleted: true
        })
    })
})
module.exports = router;