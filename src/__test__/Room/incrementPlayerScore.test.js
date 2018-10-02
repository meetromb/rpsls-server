import { expect } from 'chai';
import Room from '../../Room';

describe('incrementPlayerScore(playerID)', () => {
    it('should increment player`s score', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.incrementPlayerScore('player1');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'player1',
                score: 1,
                action: null
            }]
        })
    })

    it('should increment 3 times player`s score', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.incrementPlayerScore('player1');
        room.incrementPlayerScore('player1');
        room.incrementPlayerScore('player1');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'player1',
                score: 3,
                action: null
            }]
        })
    })

    it('should not increment player`s score, passing wrong ID', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.incrementPlayerScore(123456);

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'player1',
                score: 0,
                action: null
            }]
        })
    })

    it('should not increment player`s score, passing another valid ID', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.incrementPlayerScore('player2');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'player1',
                score: 0,
                action: null
            }]
        })
    })

    it('should not increment player`s score, when no players', () => {
        const room = new Room('testRoom');
        room.incrementPlayerScore('player2');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: []
        })
    })
});