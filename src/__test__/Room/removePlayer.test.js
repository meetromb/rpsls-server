import { expect } from 'chai';
import Room from '../../Room';

describe('removePlayer(playerID)', () => {
    it('should remove player from room.players', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer');
        room.removePlayer('testPlayer');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: []
        })
    })

    it('should remove player, when room.players not empty', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer1');
        room.addPlayer('testPlayer2');
        room.removePlayer('testPlayer1');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'testPlayer2',
                score: 0,
                action: null
            }]
        })
    })

    it('should not remove player, passing not valid ID', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer1');
        room.removePlayer(123456);

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'testPlayer1',
                score: 0,
                action: null
            }]
        })
    })

    it('should not remove player, passing not equal ID', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer1');
        room.removePlayer('anotherPlayer');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'testPlayer1',
                score: 0,
                action: null
            }]
        })
    })

    it('should not remove player, when room.players empty', () => {
        const room = new Room('testRoom');
        room.removePlayer('anotherPlayer');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: []
        })
    })
});