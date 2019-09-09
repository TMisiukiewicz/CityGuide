import { NearbyReducerState, DefaultReducerAction } from 'types';

const initialState: NearbyReducerState = {
    objects: [],
}

const nearby = (state = initialState, action: DefaultReducerAction): object => {
    switch (action.type) {
        case 'SET_NEARBY_OBJECTS':
            return {
                ...state,
                objects: action.objects
            }
        default:
            return state;
    }
};

export default nearby;