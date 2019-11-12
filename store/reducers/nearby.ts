import { NearbyReducerState, DefaultReducerAction } from 'types';

const initialState: NearbyReducerState = {
    objects: [],
    allObjects: [],
}

const nearby = (state = initialState, action: DefaultReducerAction): object => {
    switch (action.type) {
        case 'SET_NEARBY_OBJECTS':
            return {
                ...state,
                objects: action.objects
            }
        case 'SET_ALL_OBJECTS':
            return {
                ...state,
                allObjects: action.allObjects
            }
        default:
            return state;
    }
};

export default nearby;