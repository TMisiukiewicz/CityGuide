import React from 'react';
import {
    View,
    ScrollView,
    StyleSheet,
    Dimensions
} from 'react-native';
import {
    Text,
} from 'react-native-elements';
import ParallaxScrollView from 'react-native-parallax-scrollview';
import { withNavigation } from 'react-navigation';
import {
    DistanceTo,
    ObjectBottomBar
} from 'components';
import { SingleObjectProps } from 'types';
import { styles } from '../../styles';

function SingleObject(props: SingleObjectProps): JSX.Element {
    const { navigation } = props;

    const returnToPrevious = () => {
        navigation.goBack();
    };

    return (
        <React.Fragment>
            <ParallaxScrollView
                windowHeight={Dimensions.get('window').height * 0.4}
                backgroundSource={{uri: navigation.getParam('mainImage')}}
                navBarTitle={navigation.getParam('name')}
                navBarTitleColor='black'
                navBarColor='white'
                userName=' '
                userImage=' '
                userTitle=' '
                leftIcon={{ name: 'arrow-back', color: 'black', size: 24, type: 'material' }}
                leftIconOnPress={returnToPrevious}
            >
                <View style={style.background}>
                    <View style={style.container}>
                        <Text h4>{navigation.getParam('name')}</Text>
                        <DistanceTo objectCoords={navigation.getParam('coords')} />
                        <ScrollView style={style.description}>
                            <Text style={style.descriptionText}>{navigation.getParam('description')}</Text>
                        </ScrollView>
                    </View>
                </View>
            </ParallaxScrollView>
            <ObjectBottomBar />
        </React.Fragment>
    )
}

const style = StyleSheet.create({
    container: {
        margin: 15
    },
    description: {
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 15
    },
    descriptionText: {
        textAlign: 'justify'
    },
    background: {
        backgroundColor: styles.container.backgroundColor
    }
})

export default withNavigation(SingleObject);