import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { HeadingTextProps } from 'types';
import { styles } from '../../styles';

export default function HeadingText({firstLine, secondLine}: HeadingTextProps): JSX.Element {
    return (
        <View style={style.container}>
            <Text style={style.text} category="h3">{firstLine}</Text>
            <Text style={style.text} category="h3">{secondLine}</Text>
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        marginTop: 15,
        marginBottom: 15
    },
    text: {
        paddingHorizontal: 15,
        ...styles.headerText
    }
})
