const path = require('path');
const app = require('express')();

let instance = null;

export default class Server {
    constructor() {
        if (!instance) {
            instance = this;
        }

        this.server = require('http').Server(app);
        this.io = require('socket.io')(this.server);
        this.test = 'rtrte';

        return instance;
    }

    start() {
        app.get('*', (req, res) => {
            res.sendFile(path.join(__dirname, '..', '/client/index.html'));
        })
        
        this.server.listen(8080, () => {
            console.log('Server started on 8080');
        })
    }
}