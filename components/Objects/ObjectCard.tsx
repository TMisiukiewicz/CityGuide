import React from 'react';
import { Text } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import { ObjectCardProps } from 'types';
import { withNavigation } from 'react-navigation';

function ObjectCard(props: ObjectCardProps): JSX.Element {
    const { object, navigation } = props;
    return (
        <Card
            title={object.name}
            image={{uri: object.mainImage}}
        >
            <Text style={{ marginBottom: 10 }}>{object.description}</Text>
            <Button
                icon={<Icon name='code' color='#ffffff' />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title='Zobacz więcej'
                onPress={() => navigation.navigate('SingleObject', object)}
            />
        </Card>
    )
}

export default withNavigation(ObjectCard);
