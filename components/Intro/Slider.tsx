import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { slides } from './slides';

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#E5432D'
    },
    image: {
        width: 320,
        height: 320,
    },
    text: {
        // color: 'rgba(255, 255, 255, 0.8)',
        color: 'black',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: 'black',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    },
});

export default function Slider() {

    const renderItem = ({ item }: any) => {
        console.log(item);
        return (
        <View style={styles.mainContent}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.text}>{item.text}</Text>
        </View>
        );
    }
    
    return (
        <View>
            <Text>holaaa2</Text>
            <AppIntroSlider
                renderItem={renderItem}
                slides={slides}
                showPrevButton
                showSkipButton
            />
        </View>
    )
}
