import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { createContainer } from '../../store';
import appStyles from '../styles';

export class SetupScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            joinCode: ''
        };
    }

    render = () => {
        return (
            <View style={[
                styles.container,
                appStyles.container,
                appStyles.centered
            ]}>
                <Text>Welcome {this.props.user.nickname}!</Text>
            </View>
        )
    }
}

export const SetupScreenContainer = createContainer(['loteria', 'user'], {}, SetupScreen);

export default SetupScreenContainer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
    },
});
