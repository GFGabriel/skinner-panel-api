const knex = require('./knex');

module.exports = {
    getAll(){
        return knex('game_states')
    },
    getOne(id) {
        return knex('game_states').where('id',id).first();
    },
    create(gameState) {
        return knex('game_states').insert(gameState, '*')
    },
    update(id, gamestate) {
        return knex('game_states').where('id', id).update(gamestate, '*')
    },
    delete(id) {
        return knex('game_states').where('id', id).del()
    }
}