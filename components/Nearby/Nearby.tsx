import React from 'react';
import { Text } from 'react-native-ui-kitten';
import {
    DefaultCarousel,
    Loader
} from 'components';
import dictionary from 'dictionary';
import { NearbyProps } from 'types';

export function Nearby({ list }: NearbyProps): JSX.Element {
    if (list.length === 0) return <Loader />;
    else if(list.length > 0) return <DefaultCarousel title={dictionary.nearbyYou()} items={list} />;

    return <Text>No items.</Text>
}

Nearby.whyDidYouRender = true;

export default Nearby;