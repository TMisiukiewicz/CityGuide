import React from 'react';
import {
    Layout,
    Text
} from 'react-native-ui-kitten';
import { ObjectTypeProps } from 'types';
import { secondaryColor } from '../../styles';
import { StyleSheet } from 'react-native';

export default function ObjectType({ typeName }: ObjectTypeProps): JSX.Element {
    return (
        <Layout style={style.container}>
            <Text style={style.text}>{typeName}</Text>
        </Layout>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: secondaryColor,
        marginTop: 8,
        borderRadius: 5
    },
    text: {
        textTransform: 'uppercase',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 12,
        color: 'white',
        paddingHorizontal: 15,
        paddingVertical: 8
    }
});