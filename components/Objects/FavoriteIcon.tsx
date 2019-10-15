import React, { useState } from 'react';
import {
    StyleSheet,
    TouchableWithoutFeedback
} from 'react-native';
import {
    Button,
    Icon,
    StyleType
} from 'react-native-ui-kitten';

export default function FavoriteIcon(): React.ReactElement {
    const [isFavorite, changeFavoriteState] = useState(false);
    const renderIcon = (style: StyleType): JSX.Element => {
        return (
            <Icon name={isFavorite ? 'heart' : 'heart-outline'} {...style} />
        )
    };

    return (
        <TouchableWithoutFeedback>
            <Button
                onPress={(): void => changeFavoriteState(!isFavorite)}
                icon={() => renderIcon(iconStyle)}
                disabled
                appearance="ghost"
                style={style.button}
            />
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    button: {
        minHeight: 1,
    },
});

const iconStyle = {
    width: 26,
    height: 26,
    fill: '#ff2e63'
}