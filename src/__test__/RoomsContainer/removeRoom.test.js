import { expect } from 'chai';
import RoomsContainer from '../../RoomsContainer';
import testRooms from './testData';

describe('removeRoom(room)', () => {
    it('should remove room with 1 player', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);

        expect(rooms).to.deep.equals({
            rooms: [room]
        })

        rooms.removeRoom('room_1');

        expect(rooms).to.deep.equals({
            rooms: []
        });
                        
        rooms._resetRooms();
        done();
    })

    it('should remove 1 room with 2 players', (done) => {
        const rooms = new RoomsContainer();
        const room1 = testRooms.room_1_player();
        const room2 = testRooms.room_2_player();
        rooms.addRoom(room1);
        rooms.addRoom(room2);

        expect(rooms).to.deep.equals({
            rooms: [room1, room2]
        })

        rooms.removeRoom('room_2');

        expect(rooms).to.deep.equals({
            rooms: [room1]
        });
                                
        rooms._resetRooms();
        done();
    })

    it('should not remove room. passing not existing id', (done) => {
        const rooms = new RoomsContainer();
        const room1 = testRooms.room_1_player();
        rooms.addRoom(room1);

        expect(rooms).to.deep.equals({
            rooms: [room1]
        })

        rooms.removeRoom('room_2');

        expect(rooms).to.deep.equals({
            rooms: [room1]
        });
                                
        rooms._resetRooms();
        done();
    })

    it('should not remove room. no rooms', (done) => {
        const rooms = new RoomsContainer();

        expect(rooms).to.deep.equals({
            rooms: []
        })

        rooms.removeRoom('room_2');

        expect(rooms).to.deep.equals({
            rooms: []
        });
                                
        rooms._resetRooms();
        done();
    })
});