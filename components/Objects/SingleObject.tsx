import React from 'react';
import {
    View,
    ActivityIndicator,
    ScrollView,
    StyleSheet
} from 'react-native';
import {
    Image,
    Text,
} from 'react-native-elements';
import { DistanceTo } from 'components';
import { SingleObjectProps } from 'types';

export default function SingleObject(props: SingleObjectProps): JSX.Element {
    const { navigation } = props;
    return (
        <View>
            <Image
                source={{ uri: navigation.getParam('mainImage') }}
                style={{ width: '100%', height: 150 }}
                PlaceholderContent={<ActivityIndicator/>}
            />
            <View style={style.container}>
                <Text h4>{navigation.getParam('name')}</Text>
                <DistanceTo distance={5} />
                <ScrollView>
                    <Text>{navigation.getParam('description')}</Text>
                </ScrollView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
    }
})