import React from 'react';
import RootNav from './RootNav';
import { StatusBar, LogBox, View } from 'react-native';
const GLOBAL = require('./Screens/Common/Globals');
import SplashScreen from 'react-native-splash-screen';
LogBox.ignoreAllLogs();

export class App extends React.Component {

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="white" hidden={false} backgroundColor={GLOBAL.Color.c1} />
        <RootNav />
      </View >
    );
  }
}