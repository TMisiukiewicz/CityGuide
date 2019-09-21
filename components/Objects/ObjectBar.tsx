import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { DistanceTo, FavoriteIcon } from 'components';
import { ObjectBarProps } from 'types';

export default function ObjectBar(props: ObjectBarProps): JSX.Element {
    const { distance } = props;
    return (
        <View style={style.container}>
            <View style={style.singleColumn}>
                <DistanceTo distance={distance} />
            </View>
            <View style={style.singleColumn}>
                <FavoriteIcon/>
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
