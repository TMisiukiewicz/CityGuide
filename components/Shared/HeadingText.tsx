import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { HeadingTextProps } from 'types';

export default function HeadingText(props: HeadingTextProps): JSX.Element {
    return <Text style={style.text} category="h3">{props.content}</Text>;
}

const style = StyleSheet.create({
    text: {
        fontFamily: 'Montserrat-SemiBold',
        padding: 15
    }
})
