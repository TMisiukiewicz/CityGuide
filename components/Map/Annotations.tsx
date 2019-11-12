import React, { useState } from 'react';
import MapboxGl from '@react-native-mapbox-gl/maps';
import { AnnotationsProps, SingleObject } from 'types';
import { FeatureCollection } from '@turf/helpers/lib/geojson';

export default function Annotations({ objects, onSelected }: AnnotationsProps): JSX.Element {

    const collection: FeatureCollection = {
        type: 'FeatureCollection',
        features: []
    };

    objects.map((object: SingleObject) => {
        const feature: any = {
            type: 'Feature',
            id: object.id,
            geometry: {
                type: 'Point',
                coordinates: [object.coords.long, object.coords.lat]
            }
        }

        collection.features.push(feature);
    });

    const showModal = (event: any) => {
        const feature = event.nativeEvent.payload;
        const selectedObject = objects.find(object => object.id == feature.id);
        onSelected(selectedObject);
    }

    return (
        <MapboxGl.ShapeSource
            id="objects"
            shape={collection}
            hitbox={{ width: 44, height: 44 }}
            onPress={(e) => showModal(e)}
        >
            <MapboxGl.SymbolLayer
                id="singleObject"
                style={annotationStyle.icon}
            >
            </MapboxGl.SymbolLayer>
        </MapboxGl.ShapeSource>
    )
}

const annotationStyle = {
    icon: {
        iconImage: require('assets/img/marker.png'),
        iconIgnorePlacement: true,
        iconSize: 0.08
    }
}