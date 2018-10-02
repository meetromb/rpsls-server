import Room from './Room';
import RoomsContainer from './RoomsContainer';
import { gestures } from './GesturesConstructor';
import Server from './Server';

const rooms = new RoomsContainer();
const server = new Server();
const io = server.io;

export default class SocketManager {
    // Create room and add player OR add player in created room
    static onSocketInit(socket, URLhash) {
        let roomID = '';

        if (!rooms.isRoomExists(URLhash) || rooms.getRoomPlayersCount(URLhash) >= 2) {
            roomID = (URLhash && !rooms.isRoomExists(URLhash)) ? URLhash : socket.id;
            const room = new Room(roomID);
            room.addPlayer(socket.id);

            rooms.addRoom(room);
        } else {
            roomID = URLhash;
            rooms.getRoom(roomID).addPlayer(socket.id);
        }

        return roomID;
    }

    // If room filled, then emit start game event. Emit data: room id, players, winner
    static onSocketJoined(roomID) {
        if (rooms.getRoomPlayersCount(roomID) == 2) {
            rooms.getRoom(roomID).resetPlayersScore();
            io.to(roomID).emit('startGame', {
                id: rooms.getRoom(roomID).getID(),
                winner: rooms.getRoom(roomID).getWinner(),
                players: rooms.getRoom(roomID).getPlayers()
            });
        }
    }

    // If player ready to start new game, toggling his 'ready' param. If all players ready, emit start game event
    static onSocketReady(socket) {
        Object.keys(socket.rooms).forEach(room => {
            if (rooms.isRoomExists(room)) {
                if (rooms.getRoomPlayersCount(room) > 1) {
                    rooms.getRoom(room).setPlayerReady(socket.id);

                    let readyPlayers = 0;

                    rooms.getRoom(room).getPlayers().forEach(player => {
                        if (player.ready) {
                            readyPlayers++;
                        }
                    })

                    if (readyPlayers === 2) {
                        rooms.getRoom(room).resetPlayersActions();
                        rooms.getRoom(room).resetPlayersReady();

                        io.to(room).emit('startGame', {
                            id: rooms.getRoom(room).getID(),
                            winner: rooms.getRoom(room).getWinner(),
                            players: rooms.getRoom(room).getPlayers()
                        });
                    }
                }
            }
        })
    }

    // If player select gesture, adding his choise to players data.
    // If second player select gesture, emit 'players ready' event
    // Then process game, emit winner and results of game
    static onGestureSelect(socket, gestureID) {
        Object.keys(socket.rooms).forEach(room => {
            if (rooms.isRoomExists(room)) {
                if (rooms.getRoomPlayersCount(room) > 1) {
                    rooms.getRoom(room).setPlayerAction(socket.id, gestureID);

                    let readyPlayers = 0;

                    rooms.getRoom(room).getPlayers().forEach(player => {
                        if (player.action) {
                            readyPlayers++;
                        }
                    })

                    if (readyPlayers === 2) {
                        io.to(room).emit('playersReady');

                        setTimeout(() => {
                            this.processGameResult(room);
                            io.to(room).emit('updatePlayers', rooms.getRoom(room).getPlayers());
                            io.to(room).emit('gameFinished', rooms.getRoom(room).getWinner());
                        }, 3000);
                    }

                    io.to(room).emit('updatePlayers', rooms.getRoom(room).getPlayers());
                }
            }
        })
    }

    // If player disconnect, remove his from room and reset room data
    // If it was last player, delete room
    static onSocketDisconnect(socket) {
        Object.keys(socket.rooms).forEach(room => {
            try {
                if (rooms.isRoomExists(room)) {
                    if (rooms.getRoomPlayersCount(room) === 1) {
                        rooms.removeRoom(room);
                    } else {
                        rooms.getRoom(room).removePlayer(socket.id);
                        rooms.getRoom(room).resetPlayersActions();
                        rooms.getRoom(room).resetWinner();
                    }
                }
            } catch (error) {
                console.log('' + error);
            }

            io.to(room).emit('opponentLeave');
        })
    }

    // Calculate game results and set winner
    static processGameResult(roomID) {
        const room = rooms.getRoom(roomID);

        if (room.getPlayers().length >= 2) {
            const player_1 = room.getPlayers()[0];
            const player_2 = room.getPlayers()[1];

            if (player_1.action !== player_2.action) {
                const player_1_gesture = gestures.filter(item => {
                    return item.getID() === player_1.action;
                })[0];

                let player_1_canWin = 0;

                player_1_gesture.getSubGestures().forEach(item => {
                    if (item === player_2.action) {
                        player_1_canWin++;
                    }
                })

                if (player_1_canWin > 0) {
                    room.incrementPlayerScore(player_1.id);
                    room.setWinner(player_1.id);
                } else {
                    room.incrementPlayerScore(player_2.id);
                    room.setWinner(player_2.id);
                }
            } else {
                room.resetWinner();
            }
        }
    }
}