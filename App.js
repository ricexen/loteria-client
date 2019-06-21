import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from "./app/store";
import { Provider as PaperProvider } from 'react-native-paper';
import { View } from 'react-native';
import AppContainerNavigator from './router';
import theme from './theme';

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PaperProvider theme={theme}>
          <AppContainerNavigator />
        </PaperProvider>
      </Provider>
    );
  }
}

export default App;