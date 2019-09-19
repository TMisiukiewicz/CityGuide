import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import {
    Nearby,
    SingleObject
} from 'components';

const AppNavigator = createStackNavigator({
    Nearby,
    SingleObject
},
{
    initialRouteName: 'Nearby',
    headerMode: 'none',
}
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;