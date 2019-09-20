import React from 'react';
import {
    StyleSheet
} from 'react-native';
import {
    Layout,
    Icon,
    Text,
} from 'react-native-ui-kitten';
import { DistanceToProps } from 'types';

export default function DistanceTo(props: DistanceToProps): JSX.Element {
    const { distance } = props;

    return (
        <Layout>
            <Icon name='pin-outline' style={style.content} />
            <Text style={style.content}>{`${distance} km`}</Text>
        </Layout>
    )
}

const style = StyleSheet.create({
    content: {
        color: '#c9d6df'
    }
});