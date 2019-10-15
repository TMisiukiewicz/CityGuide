import React from 'react';
import {
    Header,
    Text
} from 'react-native-elements';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'store';
import { StoreInterface, HeadingProps } from 'types';

function Heading(props: HeadingProps): JSX.Element {
    const { headerTitle } = props;
    return (
        <Header
            backgroundColor="#ffffff"
            leftComponent={{ icon: 'menu', color: '#000' }}
            centerComponent={<Text h4>{headerTitle}</Text>}
            rightComponent={{ icon: 'home', color: '#000' }}
            
        />
    )
}

const mapStateToProps = (state: StoreInterface): HeadingProps => {
    const { general } = state;
    return {
        headerTitle: general.headerTitle
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Heading);