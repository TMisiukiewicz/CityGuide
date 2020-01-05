import React, { useState } from 'react';
import {
    TabBar,
    Tab
} from 'react-native-ui-kitten';
import { StyleSheet } from 'react-native';
import dictionary from 'dictionary';

export default function ObjectTabBar(): JSX.Element {
    const [tabIndex, setTabIndex] = useState(0);
    const changeList = (newIndex: number): void => {
        setTabIndex(newIndex);
    };

    return (
        <TabBar
            style={style.bar}
            selectedIndex={tabIndex}
            onSelect={changeList}
        >
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