import React from 'react';
import {
    Text,
    TouchableOpacity,
    ImageBackground,
    StyleSheet,
    View
} from 'react-native';
import { ObjectCardProps } from 'types';
import { withNavigation } from 'react-navigation';

function ObjectCard(props: ObjectCardProps): JSX.Element {
    const { object, navigation } = props;
    const description = object.description.length > 60 ? `${object.description.substr(0, 60)}...` : object.description;
    return (
        <TouchableOpacity onPress={() => navigation.navigate('SingleObject', object)}>
            <View style={style.imageContainer}>
                <ImageBackground
                    style={style.imgBg}
                    source={{ uri: object.mainImage }}
                >
                    <Text>{object.name}</Text>
                </ImageBackground>
            </View>
            <View style={style.card}>
                <Text>{description}</Text>
            </View>
        </TouchableOpacity>
        // <Card
        //     title={object.name}
        //     image={{uri: object.mainImage}}
        // >
        //     <Text style={{ marginBottom: 10 }}>{description}</Text>
        //     <Button
        //         icon={<Icon name='code' color='#ffffff' />}
        //         buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
        //         title='Zobacz więcej'
        //         onPress={() => navigation.navigate('SingleObject', object)}
        //     />
        // </Card>
    )
}

const style = StyleSheet.create({
    imgBg: {
        width: '100%',
        height: 150,
    },
    imageContainer: {
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15
    },
    card: {
        backgroundColor: 'white',
        padding: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    }
})
export default withNavigation(ObjectCard);
