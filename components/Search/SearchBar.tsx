import React from 'react';
import {
    Layout,
    Input,
    Icon,
    StyleType
} from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import dictionary from 'dictionary';

export default function SearchBar(): JSX.Element {
    
    const renderIcon = (style: StyleType): JSX.Element => {
        return (
            <Icon name='search-outline' {...style} />
        )
    };

    return (
        <Layout style={style.container}>
            <Input
                style={style.input}
                placeholder={dictionary.search()}
                icon={renderIcon}
            />
        </Layout>
    )
}

const style = StyleSheet.create({
    container: {
        paddingHorizontal: 15
    },
    input: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 1
    }
});