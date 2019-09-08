import { UserReducerState, DefaultReducerAction } from 'types';

const initialState: UserReducerState = {
    location: { lat: 0, long: 0 }
};

const user = (state = initialState, action: DefaultReducerAction) => {
    switch (action.type) {
        case 'SET_USER_LOCATION':
            return {
                ...state,
                location: action.location
            }
        default:
            return state;
    }
};

export default user;