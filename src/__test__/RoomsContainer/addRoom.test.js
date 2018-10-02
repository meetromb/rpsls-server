import { expect } from 'chai';
import RoomsContainer from '../../RoomsContainer';
import testRooms from './testData';

describe('addRoom(room)', () => {
    it('should add room with 1 player', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);

        expect(rooms).to.deep.equals({
            rooms: [room]
        })

        rooms._resetRooms();
        done();
    })

    it('should add room with 2 players', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_2_player();
        rooms.addRoom(room);

        expect(rooms).to.deep.equals({
            rooms: [room]
        })
        
        rooms._resetRooms();
        done();
    })

    it('should add 2 rooms with 1 and 2 players', (done) => {
        const rooms = new RoomsContainer();
        const room1 = testRooms.room_1_player();
        const room2 = testRooms.room_2_player();
        rooms.addRoom(room1);
        rooms.addRoom(room2);

        expect(rooms).to.deep.equals({
            rooms: [room1, room2]
        })

        rooms._resetRooms();
        done();
    })

    it('should not add room. no arguments', (done) => {
        const rooms = new RoomsContainer();
        rooms.addRoom();

        expect(rooms).to.deep.equals({
            rooms: []
        })
        
        rooms._resetRooms();
        done();
    })

    it('should not add room. not valid room', (done) => {
        const rooms = new RoomsContainer();
        const room = {
            someParam: 'param'
        }
        rooms.addRoom(room);

        expect(rooms).to.deep.equals({
            rooms: []
        })
        
        rooms._resetRooms();
        done();
    })

    it('should not add room. room exists', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);
        rooms.addRoom(room);

        expect(rooms).to.deep.equals({
            rooms: [room]
        })
        
        rooms._resetRooms();
        done();
    })
});