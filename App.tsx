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
import { ApolloProvider } from 'react-apollo';
import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-client-preset';
import AppContainer from './routes';
import { store } from 'store';
import { theme } from './theme';
import config from './config';

export default function App(): JSX.Element {
    if (process.env.NODE_ENV !== 'production') {
        const whyDidYouRender = require('@welldone-software/why-did-you-render');
        whyDidYouRender(React);
    }
    const client = new ApolloClient({
        cache: new InMemoryCache(),
        link: new HttpLink({ uri: config.api.host })
    });

    return (
        <Provider store={store}>
            <ApplicationProvider
                mapping={mapping}
                theme={theme}>
                <IconRegistry icons={EvaIconsPack} />
                <ApolloProvider client={client}>
                    <AppContainer />
                </ApolloProvider>
            </ApplicationProvider>
        </Provider>
    );
}
