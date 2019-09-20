import React from 'react';
import {
    mapping,
    light as lightTheme
} from '@eva-design/eva';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {
    ApplicationProvider,
    IconRegistry
} from 'react-native-ui-kitten';
import { Provider } from 'react-redux';
import AppContainer from './routes';
import { BottomMenu } from 'components';
import { store } from 'store';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <ApplicationProvider
                mapping={mapping}
                theme={lightTheme}>
                <IconRegistry icons={EvaIconsPack} />
                <AppContainer />
                <BottomMenu />
            </ApplicationProvider>
        </Provider>
    );
}
