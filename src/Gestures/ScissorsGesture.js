import Gesture from './Gesture';
import PaperGesture from './PaperGesture';
import LizardGesture from './LizardGesture';

export default class ScissorsGesture extends Gesture {
    constructor() {
        super();
        this.id = 3;
    }

    createOverlayGestures() {
        this.subGestures = [
            (new PaperGesture()).getID(),
            (new LizardGesture()).getID()
        ];
    }
}
