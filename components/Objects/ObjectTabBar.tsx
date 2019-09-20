import React from 'react';
import {
    TabBar,
    Tab
} from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import dictionary from 'dictionary';

export default function ObjectTabBar(): JSX.Element {
    return (
        <TabBar style={style.bar}>
            <Tab title={dictionary.nearbyArea()} />
            <Tab title={dictionary.all()} />
        </TabBar>
    )
}

const style = StyleSheet.create({
    bar: {
        paddingTop: 12,
        paddingBottom: 12
    }
})