import React, { useState } from 'react';
import { Layout } from 'react-native-ui-kitten';
import MapboxGl from '@react-native-mapbox-gl/maps';
import { StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Annotations, ObjectModal } from 'components';
import { MapProps, StoreInterface, SingleObject } from 'types';
import { mapDispatchToProps } from 'store';

function Map({ allObjects }: MapProps): JSX.Element {
    let map = null;
    const [objectModal, showObjectModal] = useState(false);

    const showModal = (object: SingleObject) => {
        showObjectModal(true);
    }

    return (
        <Layout style={style.page}>
            <Layout style={style.container}>
                {objectModal && (
                    <ObjectModal showModal={objectModal} />
                )}
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
                    <Annotations objects={allObjects} onSelected={(object): void => showModal(object)} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Map);