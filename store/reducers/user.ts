import { UserReducerState, DefaultReducerAction } from 'types';

const initialState: UserReducerState = {
    location: { lat: 0, long: 0 },
    locationDenied: false,
};

const user = (state = initialState, action: DefaultReducerAction): object => {
    switch (action.type) {
        case 'SET_USER_LOCATION':
            return {
                ...state,
                location: action.location
            };
        case 'USER_DENIED_LOCATION':
            return {
                ...state,
                locationDenied: true
            };
        default:
            return state;
    }
};

export default user;