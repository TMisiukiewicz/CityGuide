import React from 'react';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import {
    BottomMenu,
    MapScreen,
    NearbyScreen

} from 'components';
import {
    StoreInterface,
    HomeScreenProps
} from 'types';
import { mapDispatchToProps } from 'store';

export function HomeScreen({ currentScreen }: HomeScreenProps): JSX.Element {

    return (
        <React.Fragment>
            {currentScreen === 'Nearby' && (
                <NearbyScreen />
            )}
            {currentScreen === 'Map' && <MapScreen />}
            <BottomMenu />
        </React.Fragment>
    );
}

HomeScreen.whyDidYouRender = true;

const mapStateToProps = (state: StoreInterface): HomeScreenProps => {
    const { general } = state;

    return {
        currentScreen: general.currentHomeScreenTab
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);