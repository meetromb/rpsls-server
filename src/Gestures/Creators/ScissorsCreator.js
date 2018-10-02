import Creator from './Creator';
import ScissorsGesture from '../ScissorsGesture';

export default class ScissorsCreator extends Creator {
    create() {
        const gesture = new ScissorsGesture();
        gesture.createOverlayGestures();
        return gesture;
    }
}