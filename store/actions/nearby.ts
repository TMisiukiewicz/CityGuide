import {
    DefaultReducerAction,
    SingleObject
} from 'types';
import { GeolocationService } from 'services';
import { store } from 'store';

const Geolocation = new GeolocationService();

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

export function handleAllObjects(objects: SingleObject[]) {
    return (dispatch: any): void => {
        dispatch(setAllObjects(objects));
        dispatch(setNearbyObjects(objects));
    }
}
