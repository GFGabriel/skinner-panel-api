const request = require('supertest');
const knex = require('../db/knex');
const expect = require('chai').expect;
const app = require('../app')
const fixtures = require('./fixtures')

describe('Game States', () => {
    before((done) => {
        knex.migrate.latest()
            .then(() => {
            return knex.seed.run();
        }).then(() => done());
    });

    it('Lists all records', function (done) {
        request(app)
            .get('/api/v1/gameStates')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('array');
                expect(response.body).deep.equal(fixtures.gameStates);
                done();
            });
    });

    it('Show one record by id', function (done) {
        request(app)
            .get('/api/v1/gameStates/1')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).deep.equal(fixtures.gameStates[0]);
                done();
            });
    });

    it('Show one record by id', function (done) {
        request(app)
            .get('/api/v1/gameStates/2')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).deep.equal(fixtures.gameStates[1]);
                done();
            });
    });

    it('Creates a record', (done) => {
        request(app)
            .post('/api/v1/gameStates')
            .send(fixtures.gameState)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                fixtures.gameState.id = response.body.id
                expect(response.body).to.deep.equal(fixtures.gameState);
                done();
            })
    })

    it('Updates a record', (done) => {
        fixtures.gameState.playerName = 'RathorneAde'
        request(app)
            .put('/api/v1/gameStates/3')
            .send(fixtures.gameState)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal(fixtures.gameState);
                done();
            })
    })
    it('Deletes a record', (done) => {
        fixtures.gameState.playerName = 'RathorneAde'
        request(app)
            .delete('/api/v1/gameStates/3')
            .send(fixtures.gameState)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then((response) => {
                expect(response.body).to.be.a('object');
                expect(response.body).to.deep.equal({
                    deleted: true
                });
                done();
            })
    })
});

