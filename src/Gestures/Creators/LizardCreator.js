import Creator from './Creator';
import LizardGesture from '../LizardGesture';

export default class LizardCreator extends Creator {
    create() {
        const gesture = new LizardGesture();
        gesture.createOverlayGestures();
        return gesture;
    }
}