import React, { useState } from 'react';
import {
    BottomNavigation,
    BottomNavigationTab,
    Icon
} from 'react-native-ui-kitten';
import { withNavigation } from 'react-navigation';
import dictionary from 'dictionary';
import { BottomMenuProps } from 'types';

function BottomMenu(props: BottomMenuProps): JSX.Element {
    const [tabIndex, setTabIndex] = useState(0);
    const { navigation } = props;

    const tabs = [
        {
            title: dictionary.explore(),
            icon: 'globe-outline'
        },
        {
            title: dictionary.map(),
            icon: 'pin-outline'
        },
        {
            title: dictionary.favorite(),
            icon: 'heart-outline'
        },
    ]
    
    const onTabSelect = (newTabIndex: number): void => {
        setTabIndex(newTabIndex);
        navigation.navigate('Map');
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

export default withNavigation(BottomMenu);