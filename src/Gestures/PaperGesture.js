import Gesture from './Gesture';
import RockGesture from './RockGesture';
import SpockGesture from './SpockGesture';

export default class PaperGesture extends Gesture {
    constructor() {
        super();
        this.id = 2;
    }

    createOverlayGestures() {
        this.subGestures = [
            (new RockGesture()).getID(),
            (new SpockGesture()).getID() 
        ];
    }
}