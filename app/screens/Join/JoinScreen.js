import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createContainer } from '../../store';
import QRCamera from '../../components/QRCamera';
import PlayerForm from './PlayerForm';

export class JoinScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            joinCode: ''
        };
    }

    render = () => {
        console.log(this.props);
        return (
            <View style={styles.container}>
                {!this.state.joinCode ?
                    <QRCamera onReadNew={(joinCode) => this.setState({ joinCode })} />
                    : <PlayerForm />}
            </View>
        )
    }
}

export default createContainer(['loteria', 'user'], {}, JoinScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 25,
        alignItems: 'center',
    },
});
