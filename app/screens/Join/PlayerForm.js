import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import PropTypes from 'prop-types';

export class PlayerForm extends React.Component {
    static defaultProps = {
        onSubmit: () => { }
    }

    constructor(props) {
        super(props);
        this.state = {
            value: {}
        };
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit() {
        this.props.onSubmit(this.state.value)
    };

    onChageText = (prop) => (text) => this.setState({ value: { [prop]: text } });

    render() {
        const { value } = this.props;
        return (
            <View style={styles.container} >
                <TextInput
                    autoFocus={true}
                    mode='outlined'
                    label="Nickname"
                    onChangeText={this.onChageText('nickname')}
                    value={value}
                />
                <Button onPress={this.onSubmit} mode="contained">Join</Button>
            </View>
        );
    }
}

PlayerForm.propTypes = {
    onSubmit: PropTypes.func,
}

export default PlayerForm;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 105,
        justifyContent: 'space-between'
    },
})