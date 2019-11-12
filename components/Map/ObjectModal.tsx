import React from 'react';
import { Modal, View, Text } from 'react-native';
import { ObjectModalProps } from 'types';

function ObjectModal({ showModal }: ObjectModalProps): JSX.Element {
    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={showModal}
        >
            <View style={{ marginTop: 22 }}>
                <View>
                    <Text>Hello World!</Text>
                </View>
            </View>
        </Modal>
    )
}

export default ObjectModal;