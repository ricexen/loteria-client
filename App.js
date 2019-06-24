import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { persistStore } from 'redux-persist';
import AppContainerNavigator from './router';
import store from "./app/store";
import theme from './theme';

export class App extends Component {

  componentDidMount() {
    persistStore(store);
  }

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