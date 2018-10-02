import { expect } from 'chai';
import Room from '../../Room';

describe('_isPlayerExist(playerID)', () => {
    it('should return true. passing exist player', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room._isPlayerExist('player1')).to.equal(true);
    })

    it('should return false. player not exist', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room._isPlayerExist('player2')).to.equal(false);
    })

    it('should return false. not valid id', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room._isPlayerExist(123456)).to.equal(false);
    })

    it('should return false. no players', () => {
        const room = new Room('testRoom');

        expect(room._isPlayerExist('player1')).to.equal(false);
    })
});