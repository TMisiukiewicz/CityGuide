import React from 'react';
import {
    StyleSheet,
    Dimensions
    } from 'react-native';
import {
    Layout,
    Spinner
} from 'react-native-ui-kitten';
import { LoaderProps } from 'types';

export default function Loader({ type }: LoaderProps): JSX.Element {
    if(type === 'fullPage') {
        return (
            <Layout style={style.fullPage}>
                <Spinner size="giant"/>
            </Layout>
        )
    } else {
        return <Spinner />
    }
}

const style = StyleSheet.create({
    fullPage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});