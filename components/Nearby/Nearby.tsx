import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { Heading } from 'components';
import dictionary from 'dictionary';
import { StoreInterface, NearbyProps } from 'types';
import { mapDispatchToProps } from 'store';
import { GeolocationService } from 'services';

const Geolocation = new GeolocationService();

function Nearby(props: NearbyProps): JSX.Element {
    const { userLocation, userDeniedLocation } = props;
    useEffect(() => {
        Geolocation.getLocation();
    }, []);

    useEffect(() => {
        console.log(userLocation);
    }, [userLocation]);

    return (
        <View>
            <Heading title={dictionary.nearbyArea()} /> 
            {userDeniedLocation && <Text>{dictionary.geolocationDenied()}</Text>}
        </View>
    );
}

const mapStateToProps = (state: StoreInterface): NearbyProps => {
    const { user, nearby } = state;

    return {
        userLocation: user.location,
        userDeniedLocation: user.locationDenied,
        nearbyObjects: nearby.objects
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);