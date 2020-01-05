import React from 'react';
import { Layout } from 'react-native-ui-kitten';
import MapboxGl from '@react-native-mapbox-gl/maps';
import { StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Annotations } from 'components';
import { MapProps, StoreInterface, SingleObject } from 'types';
import { mapDispatchToProps } from 'store';
import { withNavigation } from 'react-navigation';

function Map({ allObjects, navigation }: MapProps): JSX.Element {
    let map = null;

    return (
        <Layout style={style.page}>
            <Layout style={style.container}>
                <MapboxGl.MapView
                    ref={(c) => map = c}
                    style={style.map}
                    zoomEnabled
                    rotateEnabled={false}
                    logoEnabled={false}
                    localizeLabels
                >
                    <MapboxGl.Camera
                        zoomLevel={12}
                        centerCoordinate={[23.1517253, 53.132978]}
                        followUserLocation
                        followUserMode="normal"
                    />
                    <Annotations objects={allObjects} onSelected={(object: SingleObject): void => navigation.navigate('SingleObject', object)} />
                    <MapboxGl.UserLocation />
                </MapboxGl.MapView>
            </Layout>
        </Layout>
    )
}

const mapStateToProps = (state: StoreInterface): MapProps => {
    const { nearby } = state;

    return {
        allObjects: nearby.allObjects
    }
};

const style = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'
    },
    container: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        backgroundColor: '#f9f9f9'
    },
    map: {
        flex: 1
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(withNavigation(Map));