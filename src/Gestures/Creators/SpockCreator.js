import Creator from './Creator';
import SpockGesture from '../SpockGesture';

export default class SpockCreator extends Creator {
    create() {
        const gesture = new SpockGesture();
        gesture.createOverlayGestures();
        return gesture;
    }
}