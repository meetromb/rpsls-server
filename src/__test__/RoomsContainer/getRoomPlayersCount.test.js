import { expect } from 'chai';
import RoomsContainer from '../../RoomsContainer';
import testRooms from './testData';

describe('getRoomPlayersCount(room)', () => {
    it('should return players count. players = 0', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_0_player();
        rooms.addRoom(room);

        expect(rooms.getRoomPlayersCount('room_0')).to.equal(0);
                
        rooms._resetRooms();
        done();
    })

    it('should return players count. players = 1', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);

        expect(rooms.getRoomPlayersCount('room_1')).to.equal(1);
                
        rooms._resetRooms();
        done();
    })

    it('should return players count. players = 2', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_2_player();
        rooms.addRoom(room);

        expect(rooms.getRoomPlayersCount('room_2')).to.equal(2);
                
        rooms._resetRooms();
        done();
    })
});