import Creator from './Creator';
import PaperGesture from '../PaperGesture';

export default class PaperCreator extends Creator {
    create() {
        const gesture = new PaperGesture();
        gesture.createOverlayGestures();
        return gesture;
    }
}