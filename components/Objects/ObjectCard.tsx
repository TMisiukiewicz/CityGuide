import React from 'react';
import {
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { ObjectBar } from 'components';
import { ObjectCardProps } from 'types';
import { styles } from '../../styles';
import { withNavigation } from 'react-navigation';

function ObjectCard(props: ObjectCardProps): JSX.Element {
    const { object, navigation } = props;
    const description = object.description.length > 60 ? `${object.description.substr(0, 60)}...` : object.description;
    return (
        <TouchableOpacity onPress={(): void => navigation.navigate('SingleObject', object)}>
            <View style={style.container}>
                <Image style={style.imgBg} source={{ uri: object.mainImage }}/>
                <View style={style.card}>
                    <Text
                        style={style.imageText}
                        appearance='alternative'
                        category='h5'
                        >
                        {object.name}
                    </Text>
                    <Text category="p1" style={styles.paragraph}>{description}</Text>
                    <ObjectBar objectCoords={object.coords} />
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#c9d6df'
    },
    imgBg: {
        width: '100%',
        height: 150,
    },
    imageStyle: {
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    imageText: {
        color: 'black',
        fontFamily: 'Montserrat-SemiBold',
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
