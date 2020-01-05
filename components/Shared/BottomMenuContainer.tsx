import React from 'react';
import { View } from 'react-native';
import { BottomMenu, ObjectBottomBar } from 'components';
import { withNavigation } from 'react-navigation';

function BottomMenuContainer(props) {
    const { navigation } = props;
    console.log(navigation.state());
    return (
        <View>
            <BottomMenu />
        </View>
    )
}

export default withNavigation(BottomMenuContainer);