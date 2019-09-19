import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import AppContainer from './routes';
import { Heading } from 'components';
import dictionary from 'dictionary';
import { store } from 'store';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Heading title={dictionary.nearbyArea()} /> 
                <AppContainer />
            </ThemeProvider>
        </Provider>
    );
}
