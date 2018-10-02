class Room {
    constructor(roomID) {
        this.id = roomID;
        this.winner = null;
        this.players = [];
    }

    /* Adds new player to players[]
    */
    addPlayer(playerID) {
        this._isPlayerIDValid(playerID, () => {
            if (!this._isPlayerExist(playerID)) {
                this.players.push({
                    id: playerID,
                    score: 0,
                    action: null
                })
            }
        });
    }

    removePlayer(playerID) {
        this._isPlayerIDValid(playerID, () => {
            const filteredPlayers = this.players.filter(obj => {
                return obj.id !== playerID;
            })

            this.players = [...filteredPlayers];
        });
    }

    getWinner() {
        return this.winner;
    }

    setWinner(winner) {
        this.winner = winner;
    }

    resetWinner() {
        this.winner = null;
    }

    incrementPlayerScore(playerID) {
        this._isPlayerIDValid(playerID, () => {
            if (this._isPlayerExist(playerID)) {
                this.players.map(obj => {
                    if (obj.id === playerID) {
                        obj.score++;
                    }
                })
            }
        });
    }

    setPlayerReady(playerID) {
        this._isPlayerIDValid(playerID, () => {
            if (this._isPlayerExist(playerID)) {
                this.players.map(obj => {
                    if (obj.id === playerID) {
                        obj.ready = true;
                    }
                })
            }
        });
    }

    setPlayerAction(playerID, gestureID) {
        this._isPlayerIDValid(playerID, () => {
            if (this._isPlayerExist(playerID)) {
                this.players.map(obj => {
                    if (obj.id === playerID) {
                        obj.action = gestureID;
                    }
                })
            }
        });
    }

    resetPlayersActions() {
        this.players.map(obj => {
            obj.action = null;
        })
    }

    resetPlayersReady() {
        this.players.map(obj => {
            obj.ready = false;
        })
    }

    resetPlayersScore() {
        this.players.map(obj => {
            obj.score = 0;
        })
    }

    getPlayerScore(playerID) {
        if (this._isPlayerExist(playerID)) {
            return this._isPlayerIDValid(playerID, () => {
                return this._getPlayer(playerID).score;
            })
        } else {
            return -1;
        }
    }

    playersCount() {
        return this.players.length;
    }

    getID() {
        return this.id;
    }

    getPlayers() {
        return this.players;
    }

    _getPlayer(playerID) {
        try {
            if (this._isPlayerExist(playerID)) {
                const filteredPlayers = this.players.filter(obj => {
                    return obj.id === playerID;
                });

                return filteredPlayers[0];
            } else {
                throw new Error(`Player ${playerID} is not exist`);
            }
        } catch (error) {
            console.log('' + error);
        }
    }

    _isPlayerIDValid(playerID, callback) {
        try {
            if (playerID.length > 0 && typeof playerID === 'string') {
                return callback();
            } else {
                throw new Error(`${playerID} is not valid player ID`);
            }
        } catch (error) {
            console.log('' + error);
        }
    }

    _isPlayerExist(playerID) {
        const filteredPlayers = this.players.filter(obj => {
            return obj.id === playerID;
        });

        return filteredPlayers.length > 0;
    }
}

module.exports = Room;