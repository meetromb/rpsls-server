import { expect } from 'chai';
import Room from '../../Room';

describe('playersCount()', () => {
    it('should return player count. players = 0', () => {
        const room = new Room('testRoom');

        expect(room.playersCount()).to.equal(0);
    })

    it('should return player count. players = 1', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');

        expect(room.playersCount()).to.equal(1);
    })

    it('should return player count. players = 2', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.addPlayer('player2');

        expect(room.playersCount()).to.equal(2);
    })

    it('should return player count. adding not valid player', () => {
        const room = new Room('testRoom');
        room.addPlayer(123456);

        expect(room.playersCount()).to.equal(0);
    })

    it('should return player count. remove player. players = 1', () => {
        const room = new Room('testRoom');
        room.addPlayer('player1');
        room.addPlayer('player2');
        room.removePlayer('player1');

        expect(room.playersCount()).to.equal(1);
    })
});