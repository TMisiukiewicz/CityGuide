import {
    PermissionsAndroid,
    Platform,
    ToastAndroid
} from 'react-native';
import Geolocation, { GeoCoordinates, GeoPosition, GeoError } from 'react-native-geolocation-service';
import { store } from 'store';
import { setUserLocation, geolocationDenied } from 'store/actions/user';

export default class GeolocationService {

    async hasLocationPermission() {
        if (Platform.OS === 'ios' ||
            (Platform.OS === 'android' && Platform.Version < 23)) {
            return true;
        }

        const hasPermission = await PermissionsAndroid.check(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (hasPermission) return true;

        const status = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        );

        if (status === PermissionsAndroid.RESULTS.GRANTED) return true;

        if (status === PermissionsAndroid.RESULTS.DENIED) {
            ToastAndroid.show('Location permission denied by user.', ToastAndroid.LONG);
            store.dispatch(geolocationDenied());
        } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
            ToastAndroid.show('Location permission revoked by user.', ToastAndroid.LONG);
        }

        return false;
    }

    async getLocation(): Promise<void|undefined> {
        const hasLocationPermission = await this.hasLocationPermission();

        if (!hasLocationPermission) return;

        Geolocation.getCurrentPosition(
            (position) => {
                const { coords } = position;
                const userLocation = {
                    lat: coords.latitude,
                    long: coords.longitude
                };
                store.dispatch(setUserLocation(userLocation));
                },
                (error) => {
                    console.log(error);
                    return error;
                },
            {
                enableHighAccuracy: true,
                timeout: 15000,
                maximumAge: 10000,
                distanceFilter: 50,
                forceRequestLocation: true
            }
            );
    }
}