import Gesture from './Gesture';
import PaperGesture from './PaperGesture';
import SpockGesture from './SpockGesture';

export default class LizardGesture extends Gesture {
    constructor() {
        super();
        this.id = 5;
    }

    createOverlayGestures() {
        this.subGestures = [
            (new PaperGesture()).getID(),
            (new SpockGesture()).getID()
        ];
    }
}