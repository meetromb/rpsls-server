import { expect } from 'chai';
import Room from '../../Room';

describe('addPlayer(playerID)', () => {
    it('should add new player into room.players', () => {
        const room = new Room('testRoom');
        room.addPlayer('playerID');

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'playerID',
                score: 0,
                action: null
            }]
        });
    });

    it('should not add player with wrong ID', () => {
        const room = new Room('testRoom');
        room.addPlayer(123456);

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: []
        })
    })

    it('should not add player with wrong ID, when room already has player', () => {
        const room = new Room('testRoom');
        room.addPlayer('player_1');
        room.addPlayer(123456);

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: [{
                id: 'player_1',
                score: 0,
                action: null
            }]
        })
    })

    it('should not add player with empty ID', () => {
        const room = new Room('testRoom');
        room.addPlayer();

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: []
        })
    })

    it('should not add player when passing function instead ID', () => {
        const room = new Room('testRoom');
        room.addPlayer(() => { console.log('function ID') });

        expect(room).to.deep.equal({
            id: 'testRoom',
            winner: null,
            players: []
        })
    })
});