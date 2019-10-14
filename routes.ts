import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    HomeScreen,
    MapScreen,
    SingleObject,
} from 'components';

const AppNavigator = createStackNavigator({
    HomeScreen,
    MapScreen,
    SingleObject,
},
{
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;