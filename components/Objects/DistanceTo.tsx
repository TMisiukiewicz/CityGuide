import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    Button,
    Icon,
    StyleType,
} from 'react-native-ui-kitten';
import { DistanceToProps } from 'types';

export default function DistanceTo(props: DistanceToProps): JSX.Element {
    const { distance } = props;

    const renderIcon = (style: StyleType): JSX.Element => {
        return (
            <Icon name='pin-outline' {...style} />
        )
    };

    return (
        <Button
            icon={() => renderIcon(iconStyle)}
            disabled
            appearance="ghost"
            textStyle={style.content}
        >
            {`${distance} km`}
        </Button>
    )
}

const style = StyleSheet.create({
    content: {
        color: '#c9d6df',
    }
});

const iconStyle = {
    width: 26,
    height: 26,
    fill: '#c9d6df'
}