import { GeneralReducerState, DefaultReducerAction } from "types";
import dictionary from "dictionary";

const initialState: GeneralReducerState = {
    headerTitle: dictionary.nearbyArea(),
}

const general = (state = initialState, action: DefaultReducerAction): object => {
    switch (action.type) {
        case 'SET_HEADER_TITLE':
            return {
                ...state,
                objects: action.headerTitle
            }
        default:
            return state;
    }
};

export default general;