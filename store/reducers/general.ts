import { GeneralReducerState, DefaultReducerAction } from "types";
import dictionary from "dictionary";

const initialState: GeneralReducerState = {
    headerTitle: dictionary.nearbyArea(),
    currentHomeScreenTab: 'Nearby'
}

const general = (state = initialState, action: DefaultReducerAction): object => {
    switch (action.type) {
        case 'SET_HEADER_TITLE':
            return {
                ...state,
                headerTitle: action.headerTitle
            }
        case 'SET_CURRENT_HOMESCREEN_TAB':
            return {
                ...state,
                currentHomeScreenTab: action.currentHomeScreenTab
            }
        default:
            return state;
    }
};

export default general;