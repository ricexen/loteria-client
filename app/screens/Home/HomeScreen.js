import React from 'react';
import { View, Text } from 'react-native';
import { createContainer } from '../../store';

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
                <Text>Holasajdhajshdjkasdasjdhajksd</Text>
            </View>
        )
    }
}

export default createContainer(['loteria', 'user'], {}, HomeScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
