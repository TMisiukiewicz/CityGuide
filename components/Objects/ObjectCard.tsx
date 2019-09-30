import React from 'react';
import {
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    View
} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { ObjectBar } from 'components';
import { ObjectCardProps } from 'types';
import { withNavigation } from 'react-navigation';

function ObjectCard(props: ObjectCardProps): JSX.Element {
    const { object, navigation } = props;
    const description = object.description.length > 60 ? `${object.description.substr(0, 60)}...` : object.description;
    return (
        <TouchableOpacity onPress={(): void => navigation.navigate('SingleObject', object)}>
            <View>
                <ImageBackground
                    style={style.imgBg}
                    imageStyle={style.imageStyle}
                    source={{ uri: object.mainImage }}
                >
                    <View style={style.imageContainer} >
                        <Text
                            style={style.imageText}
                            appearance='alternative'
                            category='h4'
                        >
                            {object.name}
                        </Text>
                    </View>
                </ImageBackground>
            </View>
            <View style={style.card}>
                <Text category="p1" style={style.description}>{description}</Text>
                <ObjectBar objectCoords={object.coords} />
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    imgBg: {
        width: '100%',
        height: 150,
    },
    imageStyle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    imageText: {
        color: 'white',
        marginLeft: 15,
        position: 'absolute',
        bottom: 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    description: {
        color: '#52616b',
    }
})
export default withNavigation(ObjectCard);
