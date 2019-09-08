import {
    GeolocationCoords,
    DefaultReducerAction
} from 'types';

export function setUserLocation(location: GeolocationCoords): DefaultReducerAction {
    return {
        type: 'SET_USER_LOCATION',
        location
    }
};