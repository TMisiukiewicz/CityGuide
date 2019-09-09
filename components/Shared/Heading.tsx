import React from 'react';
import { Header } from 'react-native-elements';

interface Props {
    title: string;
}

export default function Heading(props: Props) {
    const { title } = props;

    return (
        <Header
            placement="left"
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: title, style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
        />
    )
}
