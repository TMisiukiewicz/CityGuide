import React from 'react';
import { View } from 'react-native';
import { Heading } from 'components';
import dictionary from 'dictionary';

export default function Nearby() {
    return (
        <View>
            <Heading title={dictionary.nearbyArea()}/>  
        </View>
    );
}
