import React, { memo } from 'react';
import { Layout } from 'react-native-ui-kitten';
import MapboxGl from '@react-native-mapbox-gl/maps';
import { StyleSheet, Dimensions } from 'react-native';

function Map(): JSX.Element {
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
                >
                    <MapboxGl.Camera
                        zoomLevel={12}
                        centerCoordinate={[23.1517253, 53.132978]}
                    />
                </MapboxGl.MapView>
            </Layout>
        </Layout>
    )
}

const style = StyleSheet.create({
    page: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9f9f9'
    },
    container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: '#f9f9f9'
    },
    map: {
        flex: 1
    }
});

export default memo(Map);