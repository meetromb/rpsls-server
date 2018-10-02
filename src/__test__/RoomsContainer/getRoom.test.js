import { expect } from 'chai';
import RoomsContainer from '../../RoomsContainer';
import testRooms from './testData';

describe('getRoom(room)', () => {
    it('should return room. id: room_1', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);

        expect(rooms.getRoom('room_1')).to.deep.equals(room);
        
        rooms._resetRooms();
        done();
    })

    it('should return room. contains 2 rooms. id: room_2', (done) => {
        const rooms = new RoomsContainer();
        const room1 = testRooms.room_1_player();
        const room2 = testRooms.room_2_player();
        rooms.addRoom(room1);
        rooms.addRoom(room2);

        expect(rooms.getRoom('room_2')).to.deep.equals(room2);
        
        rooms._resetRooms();
        done();
    })

    it('should not return room. no rooms', (done) => {
        const rooms = new RoomsContainer();

        expect(rooms.getRoom('room_2')).to.equal();
        
        rooms._resetRooms();
        done();
    })

    it('should not return room. room does not exist', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);

        expect(rooms.getRoom('room_2')).to.equal();
        
        rooms._resetRooms();
        done();
    })
});