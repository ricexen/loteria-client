import React from 'react';
import { View, StyleSheet } from 'react-native';
import { createContainer } from '../../store';
import QRCamera from '../../components/QRCamera';
import PlayerForm from './PlayerForm';
import actions from './JoinScreenActions';
import appStyles from '../styles';

export class JoinScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            joinCode: ''
        };
    }

    createPlayer = (value) => {
        const { nickname } = value;
        this.props.createPlayer(nickname);
    }

    componentDidUpdate() {
        const { user, navigation } = this.props;
        if (!user.joined && !user.loading) {
            this.props.joinToGame(this.state.joinCode);
        } else {
            navigation.navigate('Setup');
        }
    }

    render = () => {
        return (
            <View style={[styles.container, appStyles.container, appStyles.centered]}>
                {!this.state.joinCode ?
                    <QRCamera onReadNew={joinCode => this.setState({ joinCode })} />
                    : <PlayerForm onSubmit={this.createPlayer} />}
            </View>
        )
    }
}

export const JoinScreenContainer = createContainer(['loteria', 'user'], actions, JoinScreen);

export default JoinScreenContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
});
