import React from 'react';
import { ThemeProvider } from 'react-native-elements';
import { Provider } from 'react-redux';
import { Nearby } from 'components';
import { store } from 'store';

export default function App(): JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <Nearby />
            </ThemeProvider>
        </Provider>
    );
}
