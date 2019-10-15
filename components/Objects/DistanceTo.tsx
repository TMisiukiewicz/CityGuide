import React from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    Button,
    Icon,
    StyleType,
} from 'react-native-ui-kitten';
import { connect } from 'react-redux';
import { mapDispatchToProps } from 'store';
import { GeolocationService } from 'services';
import { DistanceToProps, StoreInterface, DistanceToMapToProps } from 'types';

const Geolocation = new GeolocationService();

function DistanceTo(props: DistanceToProps): JSX.Element {
    const { userLocation, objectCoords } = props;
    const distance = Geolocation.calculateDistance(userLocation, objectCoords);
    const renderIcon = (style: StyleType): JSX.Element => (<Icon name='pin-outline' {...style} />);

    return (
        <Button
            icon={() => renderIcon(iconStyle)}
            disabled
            appearance="ghost"
            textStyle={style.content}
        >
            {`${distance.toFixed(2)} km`}
        </Button>
    )
}

const style = StyleSheet.create({
    content: {
        color: '#c9d6df',
    }
});

const iconStyle = {
    width: 26,
    height: 26,
    fill: '#c9d6df'
}

const mapStateToProps = (state: StoreInterface): DistanceToMapToProps => {
    const { user } = state;

    return {
        userLocation: user.location,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DistanceTo);