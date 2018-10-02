import { expect } from 'chai';
import Room from '../../Room';

describe('_getPlayer(playerID)', () => {
    it('should return player', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room._getPlayer('player1')).to.deep.equal({
            id: 'player1',
            score: 0,
            action: null
        })
    })

    it('should return player, when 2 players', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.addPlayer('player2');

        expect(room._getPlayer('player2')).to.deep.equal({
            id: 'player2',
            score: 0,
            action: null
        })
    })

    it('should return player, when player not default params', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.incrementPlayerScore('player1')

        expect(room._getPlayer('player1')).to.deep.equal({
            id: 'player1',
            score: 1,
            action: null
        })
    })

    it('should not return player. passing not valid id', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room._getPlayer(123456)).to.equal(undefined);
    })

    it('should not return player. no players', () => {
        const room = new Room('testRoom');

        expect(room._getPlayer('player1')).to.equal(undefined);
    })

    it('should not return player. player not exists', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room._getPlayer('anotherPlayer')).to.equal(undefined);
    })
});