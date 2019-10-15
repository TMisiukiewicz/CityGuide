import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    DistanceTo,
    ObjectType,
} from 'components';
import {  DistanceToProps } from 'types';

export default function ObjectBar(props: DistanceToProps): JSX.Element {
    const { objectCoords } = props;
    return (
        <View style={style.container}>
            <View style={style.singleColumn}>
                <ObjectType typeName="Zabytek" />
            </View>
            <View style={style.singleColumn}>
                <DistanceTo objectCoords={objectCoords} />
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    singleColumn: {
        padding: 10,
        flexWrap: 'wrap'
    }
});
