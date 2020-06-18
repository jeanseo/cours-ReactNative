import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/index';
import DenominationScreen from "./src/screens/Denomination";

const store = createStore(reducer);

export default function App() {
  return (
      <Provider store={store}>
        <DenominationScreen/>
      </Provider>
  );
}

