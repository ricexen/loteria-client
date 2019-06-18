import React, { Component } from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './app/screens/Home/HomeScreen';
import store from "./app/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <HomeScreen />
      </Provider>
    );
  }
}