import React, { useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import { Heading, ObjectCard } from 'components';
import dictionary from 'dictionary';
import { StoreInterface, NearbyProps } from 'types';
import { mapDispatchToProps } from 'store';
import { GeolocationService } from 'services';

const Geolocation = new GeolocationService();

export function Nearby(props: NearbyProps): JSX.Element {
    const { userDeniedLocation, dispatchers, nearbyObjects } = props;

    useEffect(() => {
        Geolocation.getLocation();

        //TODO: fetch from API
        const nearbyObjects = [{
            id: 1,
            name: 'Pałac Branickich',
            distance: 100,
            description: "Lorem ipsum dolor sid amet",
            photos: ["https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg"],
            mainImage: "https://static.polskieszlaki.pl/zdjecia/wycieczki/2015-08/2-eg-1439987734.jpg",
            coords: {
                lat: 23.1629502,
                long: 53.1306049
            }
        }];
        
        if (nearbyObjects.length > 0) {
            dispatchers.nearby.setNearbyObjects(nearbyObjects);
        }
    }, []);

    return (
        <View>
            {/* <Heading title={dictionary.nearbyArea()} />  */}
            {userDeniedLocation && <Text>{dictionary.geolocationDenied()}</Text>}
            {
                nearbyObjects.length > 0 &&
                nearbyObjects.map((object) => <ObjectCard key={object.id} object={object} />)
            }
            {
                nearbyObjects.length === 0 && <Text>Brak obiektów w pobliżu :(</Text>
            }
        </View>
    );
}

const mapStateToProps = (state: StoreInterface): NearbyProps => {
    const { user, nearby } = state;

    return {
        userLocation: user.location,
        userDeniedLocation: user.locationDenied,
        nearbyObjects: nearby.objects,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);