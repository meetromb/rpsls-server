import { expect } from 'chai';
import Room from '../../Room';

describe('getPlayerScore(playerID)', () => {
    it('should return player`s score. score = 0', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer');

        expect(room.getPlayerScore('testPlayer')).to.equal(0);
    })

    it('should return player`s score. score = 1', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer');
        room.incrementPlayerScore('testPlayer');

        expect(room.getPlayerScore('testPlayer')).to.equal(1);
    })

    it('should return player`s score, player ID is not valid', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer');

        expect(room.getPlayerScore(123456)).to.equal(-1);
    })

    it('should return player`s score, passing another valid ID', () => {
        const room = new Room('testRoom');
        room.addPlayer('testPlayer');

        expect(room.getPlayerScore('anotherPlayer')).to.equal(-1);
    })

    it('should return player`s score, when no players', () => {
        const room = new Room('testRoom');

        expect(room.getPlayerScore('anotherPlayer')).to.equal(-1);
    })
});