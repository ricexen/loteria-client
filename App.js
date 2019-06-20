import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./app/store";
import { JoinScreen } from './app/screens';
import { Provider as PaperProvider } from 'react-native-paper';
import { View } from 'react-native';
import theme from './theme';

export default class App extends Component {
  get style() {
    return {
      backgroundColor: theme.colors.background,
      width: '100%',
      flex: 1,
    };
  }

  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <View style={this.style}>
            <JoinScreen />
          </View>
        </PaperProvider>
      </Provider>
    );
  }
}