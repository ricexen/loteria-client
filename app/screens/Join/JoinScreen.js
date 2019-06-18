import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createContainer } from '../../store';
import QRCamera from '../../components/QRCamera';

export class JoinScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            qrCode: ''
        };
    }

    render = () => (
        <View style={styles.container}>
            <QRCamera onReadNew={(qrCode) => alert({ qrCode })} />
        </View>
    )
}

export default createContainer(['loteria', 'user'], {}, JoinScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        width: '100%',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
