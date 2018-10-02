import RockCreator from './Gestures/Creators/RockCreator';
import PaperCreator from './Gestures/Creators/PaperCreator';
import ScissorsCreator from './Gestures/Creators/ScissorsCreator';
import SpockCreator from './Gestures/Creators/SpockCreator';
import LizardCreator from './Gestures/Creators/LizardCreator';

export const gestures = [
    new RockCreator().create(),
    new PaperCreator().create(),
    new ScissorsCreator().create(),
    new SpockCreator().create(),
    new LizardCreator().create()
]