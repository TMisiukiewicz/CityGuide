import React, { useState } from 'react';
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon
} from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'store';
import dictionary from 'dictionary';
import { BottomMenuProps, StoreInterface } from 'types';

function BottomMenu({dispatchers}: BottomMenuProps): JSX.Element {
    const [tabIndex, setTabIndex] = useState(0);

    const tabs = [
        {
            title: dictionary.explore(),
            icon: 'globe-outline',
            screen: 'Nearby'
        },
        {
            title: dictionary.map(),
            icon: 'pin-outline',
            screen: 'Map'
        },
        {
            title: dictionary.favorite(),
            icon: 'heart-outline',
            screen: ''
        },
    ]
    
    const onTabSelect = (newTabIndex: number): void => {
        setTabIndex(newTabIndex);
        dispatchers.general.setCurrentHomeScreenTab(tabs[newTabIndex].screen);
    };

    const renderIcon = (icon: string): JSX.Element => {
        return <Icon name={icon} />
    };
    
    return (
        <BottomNavigation
            selectedIndex={tabIndex}
            onSelect={onTabSelect}
        >
            {
                tabs.map((tab) => {
                    return <BottomNavigationTab
                        key={tab.title}
                        title={tab.title}
                        icon={(): JSX.Element => renderIcon(tab.icon)}
                    />
                })
            }
        </BottomNavigation>
    );
}

const mapStateToProps = (state: StoreInterface): BottomMenuProps => {
    const { general } = state;

    return {
        currentScreen: general.currentHomeScreenTab
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BottomMenu);