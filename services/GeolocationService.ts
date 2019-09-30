import {
    PermissionsAndroid,
    Platform,
    ToastAndroid
} from 'react-native';
import Geolocation, { GeoCoordinates, GeoPosition, GeoError } from 'react-native-geolocation-service';
import { store } from 'store';
import { setUserLocation, geolocationDenied } from 'store/actions/user';
import { GeolocationCoords } from 'types';

export default class GeolocationService {

    async hasLocationPermission(): Promise<void|boolean> {
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
            async (position) => {
                const { coords } = position;
                const userLocation = {
                    lat: coords.latitude,
                    long: coords.longitude
                };
                await store.dispatch(setUserLocation(userLocation));
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

    calculateDistance(firstPoint: GeolocationCoords, secondPoint: GeolocationCoords): number {
        const earthRadiusKm = 6371;

        const radiansLat = this.degreesToRadians(secondPoint.lat - firstPoint.lat);
        const radiansLong = this.degreesToRadians(secondPoint.long - firstPoint.long);

        const lat1 = this.degreesToRadians(firstPoint.lat);
        const lat2 = this.degreesToRadians(secondPoint.lat);

        const a = Math.sin(radiansLat / 2) * Math.sin(radiansLat / 2)
            + Math.sin(radiansLong / 2) * Math.sin(radiansLong / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        
        return earthRadiusKm * c;
    }

    degreesToRadians(degrees: number): number {
        return degrees * Math.PI / 180;
    }
}