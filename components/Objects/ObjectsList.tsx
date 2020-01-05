import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { ObjectCard } from 'components';
import { ObjectListProps } from 'types';

export default function ObjectsList(props: ObjectListProps): JSX.Element {
    const { list } = props;
    return (
        <View style={style.container}>
            {list.map((item) => {
                return <ObjectCard key={item.id} object={item} />
            })}
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    }
})