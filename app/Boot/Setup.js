import React from 'react';
import { App } from '../App';
import { Provider } from 'react-redux'
import { store } from '../redux/store';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export function Setup() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <App />
      </SafeAreaProvider>
    </Provider>
  );

}