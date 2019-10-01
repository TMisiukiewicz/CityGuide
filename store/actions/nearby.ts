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

export function setAllObjects(allObjects: SingleObject[]): DefaultReducerAction {
    return {
        type: 'SET_ALL_OBJECTS',
        allObjects
    }
}