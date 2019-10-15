import React, { useEffect } from 'react'
import { ScrollView } from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import { Text } from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import {
    HeadingText,
    SearchBar,
    Nearby,
    ObjectsList,
    Loader
} from 'components';
import { NearbyScreenProps, StoreInterface } from 'types';
import { mapDispatchToProps } from 'store';
import { GeolocationService } from 'services';
import { getAllObjects } from 'queries';

const Geolocation = new GeolocationService();

function NearbyScreen({ dispatchers, allObjects }: NearbyScreenProps): JSX.Element {

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        await Geolocation.getLocation();
    }

    const { loading, error, data } = useQuery(getAllObjects, {
        skip: allObjects.length > 0
    });

    if (allObjects.length === 0) {
        if (loading) return <Loader type="fullPage" />
        if (error) return <Text>An error occured</Text>
        
        dispatchers.nearby.handleAllObjects(data.objects);
    }

    return (
        <ScrollView>
            <HeadingText
                firstLine="Witaj"
                secondLine="w Białymstoku!"
            />
            <SearchBar />
            <Nearby list={allObjects} />
            <ObjectsList list={allObjects} />
        </ScrollView>
    )
}

const mapStateToProps = (state: StoreInterface): NearbyScreenProps => {
    const { user, nearby } = state;

    return {
        userLocation: user.location,
        userDeniedLocation: user.locationDenied,
        allObjects: nearby.objects,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NearbyScreen);