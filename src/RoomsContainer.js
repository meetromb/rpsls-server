import Room from './Room';

let instance = null;

export default class RoomsContainer {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.rooms = [];

        return instance;
    }

    // Use ONLY for tests
    _resetRooms() {
        this.rooms = [];
    }

    addRoom(room) {
        if (room instanceof Room) {
            if (!this.isRoomExists(room.getID())) {
                this.rooms.push(room);
            }
        }
    }

    removeRoom(roomID) {
        const filteredRooms = this.rooms.filter(obj => {
            return obj.id !== roomID;
        })

        this.rooms = [...filteredRooms];
    }

    isRoomExists(roomID) {
        const filteredRooms = this.rooms.filter(obj => {
            return obj.id === roomID;
        })

        return filteredRooms.length > 0;
    }

    getRoom(roomID) {
        try {
            if (this.isRoomExists(roomID)) {
                const filteredRooms = this.rooms.filter(obj => {
                    return obj.id === roomID;
                })

                return filteredRooms[0];
            } else {
                throw new Error(`Room ${roomID} does not exists!`);
            }
        } catch (error) {
            console.log('' + error);
        }
    }

    getRoomPlayersCount(roomID) {
        if (this.isRoomExists(roomID)) {
            return this.getRoom(roomID).playersCount();
        } else {
            return -1;
        }
    }
}