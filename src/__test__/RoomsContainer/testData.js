import Room from '../../Room';

class testRooms {
    static room_0_player() {
        const room = new Room('room_0');

        return room;
    }

    static room_1_player() {
        const room = new Room('room_1');
        room.addPlayer('player1');

        return room;
    }

    static room_2_player() {
        const room = new Room('room_2');
        room.addPlayer('player1');
        room.addPlayer('player2');
        room.incrementPlayerScore('player2');

        return room;
    }
}

module.exports = testRooms;