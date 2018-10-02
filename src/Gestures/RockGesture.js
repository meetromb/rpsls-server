import Gesture from './Gesture';
import LizardGesture from './LizardGesture';
import ScissorsGesture from './ScissorsGesture';

export default class RockGesture extends Gesture {
    constructor() {
        super();
        this.id = 1;
    }

    createOverlayGestures() {
        this.subGestures = [
            (new LizardGesture()).getID(),
            (new ScissorsGesture()).getID()
        ];
    }
}