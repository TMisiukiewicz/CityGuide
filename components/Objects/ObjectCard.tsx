import React from 'react';
import {
    TouchableWithoutFeedback,
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
        <TouchableWithoutFeedback onPress={(): void => navigation.navigate('SingleObject', object)}>
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
        </TouchableWithoutFeedback>
    )
}

const style = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: '#f0f0f0',
        marginBottom: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,

        elevation: 6
    },
    imgBg: {
        width: '100%',
        height: 150,
    },
    imageText: {
        color: 'black',
        fontFamily: 'Montserrat-SemiBold',
    },
    card: {
        backgroundColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    description: {
        color: '#52616b',
    }
})
export default withNavigation(ObjectCard);
