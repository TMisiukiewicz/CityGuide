import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { DistanceTo } from 'components';
import { ObjectBarProps } from 'types';

export default function ObjectBar(props: ObjectBarProps): JSX.Element {
    const { distance } = props;
    return (
        <View style={style.container}>
            <DistanceTo distance={distance} />
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        marginTop: 5
    }
});
