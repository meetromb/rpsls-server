export default class Gesture {
    constructor() {
        this.id = 0;
        this.subGestures = [];
    }

    createOverlayGestures() {
        this.subGestures = [];
    }

    getID() {
        return this.id;
    }

    getSubGestures() {
        return this.subGestures;
    }
}