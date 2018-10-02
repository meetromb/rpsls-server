import Gesture from './Gesture';
import ScissorsGesture from './ScissorsGesture';
import RockGesture from './RockGesture';

export default class SpockGesture extends Gesture {
    constructor() {
        super();
        this.id = 4;
    }

    createOverlayGestures() {
        this.subGestures = [
            (new ScissorsGesture()).getID(),
            (new RockGesture()).getID()
        ];
    }
}