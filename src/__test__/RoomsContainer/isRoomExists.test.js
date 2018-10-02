import { expect } from 'chai';
import RoomsContainer from '../../RoomsContainer';
import testRooms from './testData';

describe('isRoomExists(room)', () => {
    it('should return true. room exists', (done) => {
        const rooms = new RoomsContainer();
        const room = testRooms.room_1_player();
        rooms.addRoom(room);

        expect(rooms.isRoomExists('room_1')).to.equal(true);
                        
        rooms._resetRooms();
        done();
    })

    it('should return false. room no exists', (done) => {
        const rooms = new RoomsContainer();

        expect(rooms.isRoomExists('room_1')).to.equal(false);
                        
        rooms._resetRooms();
        done();
    })

    it('should return false. room id not valid', (done) => {
        const rooms = new RoomsContainer();

        expect(rooms.isRoomExists(() => {})).to.equal(false);
                        
        rooms._resetRooms();
        done();
    })
});