import {
    DefaultReducerAction,
    SingleObject
} from 'types';

export function setNearbyObjects(objects: SingleObject[]): DefaultReducerAction {
    return {
        type: 'SET_NEARBY_OBJECTS',
        objects
    }
}