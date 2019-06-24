import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
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
        if (user.tokens.player) {
            this.props.joinToGame(this.state.joinCode);
        }
        if (user.joined) {
            navigation.navigate({ routeName: 'Setup', left: null });
        }
    }

    render = () => {
        return (
            <View style={[styles.container, appStyles.container, appStyles.centered]}>
                {!this.props.user.loading ?
                    (!this.state.joinCode ?
                        <QRCamera onReadNew={joinCode => this.setState({ joinCode })} />
                        : <PlayerForm onSubmit={this.createPlayer} />)
                    : <ActivityIndicator size="large" />}
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
