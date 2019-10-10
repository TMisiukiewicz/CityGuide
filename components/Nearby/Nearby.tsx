import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Text } from 'react-native-ui-kitten';
import {
    ScrollView,
    StyleSheet,
    View
} from 'react-native';
import { useQuery } from '@apollo/react-hooks';
import {
    DefaultCarousel,
    BottomMenu,
    HeadingText,
    ObjectsList,
    SearchBar,
    Loader
} from 'components';
import dictionary from 'dictionary';
import {
    StoreInterface,
    NearbyProps
} from 'types';
import { mapDispatchToProps } from 'store';
import { GeolocationService } from 'services';
import { getAllObjects } from 'queries';
import { styles } from '../../styles';

const Geolocation = new GeolocationService();

export function Nearby(props: NearbyProps): JSX.Element {

    const { userDeniedLocation, dispatchers, nearbyObjects } = props;

    useEffect(() => {
        getLocation();
    }, []);

    const getLocation = async () => {
        await Geolocation.getLocation();
    }
    
    const { loading, error, data } = useQuery(getAllObjects);

    if (loading) return <Loader type="fullPage"/>
    if (error) return <Text>An error occured</Text>
    
    dispatchers.nearby.handleAllObjects(data.objects);

    return (
        <React.Fragment>
            <ScrollView>
                <HeadingText
                    firstLine="Witaj"
                    secondLine="w Białymstoku!"
                />
                <SearchBar />
                <View style={styles.container}>
                    {userDeniedLocation && <Text>{dictionary.geolocationDenied()}</Text>}
                    {
                        nearbyObjects.length > 0 &&
                        <DefaultCarousel title={dictionary.nearbyYou()} items={nearbyObjects} />
                    }
                    {
                        nearbyObjects.length === 0 && <Text>Brak obiektów w pobliżu :(</Text>
                    }
                    <Text category="h6" style={style.title}>{dictionary.others()}</Text>
                    <ObjectsList list={nearbyObjects} />
                </View>
            </ScrollView>
            <BottomMenu />
        </React.Fragment>
    );
}

Nearby.whyDidYouRender = true;

const style = StyleSheet.create({
    title: {
        padding: 15,
        fontFamily: 'Montserrat-SemiBold'
    }
});

const mapStateToProps = (state: StoreInterface): NearbyProps => {
    const { user, nearby } = state;

    return {
        userLocation: user.location,
        userDeniedLocation: user.locationDenied,
        nearbyObjects: nearby.objects,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Nearby);