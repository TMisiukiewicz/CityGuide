import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import {
    Text,
    Icon,
    Button
} from 'react-native-elements';
import dictionary from 'dictionary';
import { DistanceToProps } from 'types';

export default function DistanceTo(props: DistanceToProps) {
    const { distance } = props;
    return (
        <Button
            titleStyle={style.distance}
            disabled
            icon={
                <Icon
                    type="foundation"
                    name="marker"
                    color={style.distance.color}
                    style={style.distance}
                />
            }
            title={dictionary.distanceAway(distance)}
            type="clear"
        />
    )
}

const style = StyleSheet.create({
    distance: {
        color: '#525252',
    }
});