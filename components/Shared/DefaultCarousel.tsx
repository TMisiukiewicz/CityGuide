import React from 'react';
import { ObjectCard } from 'components';
import Carousel from 'react-native-snap-carousel';
import { Dimensions, StyleSheet } from 'react-native';
import { Text } from 'react-native-ui-kitten';
import { DefaultCarouselProps } from 'types';


export default function DefaultCarousel(props: DefaultCarouselProps): JSX.Element {

    const { items, title } = props;
    const renderItem = ({ item }: any): JSX.Element => {
        return <ObjectCard object={item} />;
    }

    return (
        <>
            <Text category="h6" style={style.title}>{title}</Text>
            <Carousel
                layout={'default'}
                data={items}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width - 75}
                renderItem={renderItem}
            />
        </>
    )
}

const style = StyleSheet.create({
    title: {
        padding: 15,
        fontFamily: 'Montserrat-SemiBold'
    }
})
