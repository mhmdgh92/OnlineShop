import React, { useState, useEffect } from 'react';
import App from '../App';
import { View, Text, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
// Removed later
// import configureStore from '../store/configureStore';//NewScreen
// import store from '../redux/store';//NewScreen2
import toolKitStore from '../redux/toolKitStore';//NewScreen3

function Setup() {

  return (
    <Provider store={toolKitStore}>
      <App />
    </Provider>
  );

}
export default Setup;