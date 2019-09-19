import React from 'react';
import {
    View,
    ActivityIndicator
} from 'react-native';
import {
    Image,
    Text
} from 'react-native-elements';
import { SingleObjectProps } from 'types';

export default function SingleObject(props: SingleObjectProps): JSX.Element {
    const { navigation } = props;
    return (
        <View>
            <Image
                source={{ uri: navigation.getParam('mainImage') }}
                style={{ width: '100%', height: 250 }}
                PlaceholderContent={<ActivityIndicator/>}
            />
            <Text h4>{navigation.getParam('name')}</Text>
            <Text>1.5 km stąd</Text>
        </View>
    )
}
