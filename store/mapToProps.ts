import { Dispatch } from 'redux';
import {
    nearbyActions,
    userActions
} from './actions';
import {
    SingleObject,
    GeolocationCoords,
    DefaultReducerAction
} from 'types';

export const mapStateToProps = (state: any): any => {
    return state;
};

export const mapDispatchToProps = (dispatch: Dispatch<any>): any => {
    return {
        dispatchers: {
            nearby: {
                setNearbyObjects: (objects: SingleObject[]): DefaultReducerAction => dispatch(nearbyActions.setNearbyObjects(objects))
            },
            user: {
                setUserLocation: (location: GeolocationCoords): DefaultReducerAction => dispatch(userActions.setUserLocation(location))
            }
        }
    }
};