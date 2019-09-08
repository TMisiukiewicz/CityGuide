import { nearbyActions, userActions } from './actions';
import {
    SingleObject,
    GeolocationCoords
} from 'types';

export const mapStateToProps = (state: any): any => {
    return state;
};

export const mapDispatchToProps = (dispatch: any) => {
    return {
        dispatchers: {
            nearby: {
                setNearbyObjects: (objects: SingleObject[]) => dispatch(nearbyActions.setNearbyObjects(objects))
            },
            user: {
                setUserLocation: (location: GeolocationCoords) => dispatch(userActions.setUserLocation(location))
            }
        }
    }
};