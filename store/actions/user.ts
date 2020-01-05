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

export function geolocationDenied(): DefaultReducerAction {
    return {
        type: 'USER_DENIED_LOCATION'
    };
}