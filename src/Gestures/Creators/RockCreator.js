import Creator from './Creator';
import RockGesture from '../RockGesture';

export default class RockCreator extends Creator {
    create() {
        const gesture = new RockGesture();
        gesture.createOverlayGestures();
        return gesture;
    }
}