import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

const PlayerForm = ({ value, onChangeText }) => (
    <View style={styles.container} >
        <TextInput
            autoFocus={true}
            mode='outlined'
            label="Nickname"
            value={value}
            onChangeText={onChangeText || (() => { })}
        />
        <Button mode="contained">Join</Button>
    </View>
)

export default PlayerForm;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 105,
        justifyContent: 'space-between'
    },
})