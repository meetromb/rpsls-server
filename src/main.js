import Server from './Server';
import SocketManager from './SocketManager';

(function () {
    const server = new Server();
    server.start();

    const io = server.io;

    io.on('connection', (socket) => {
        socket.on('init', (URLhash) => {
            const roomID = SocketManager.onSocketInit(socket, URLhash);

            socket.join(roomID, () => {
                SocketManager.onSocketJoined(roomID);
            }).emit('roomCreated', roomID);
        })

        socket.on('gestureSelect', (gestureID) => {
            SocketManager.onGestureSelect(socket, gestureID);
        })

        socket.on('ready', () => {
            SocketManager.onSocketReady(socket);
        })

        socket.on('disconnecting', () => {
            SocketManager.onSocketDisconnect(socket);
        })
    })
})()
