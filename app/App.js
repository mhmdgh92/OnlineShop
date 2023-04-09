import React, {Component} from 'react';
import RootNav from './RootNav';
import {StatusBar,LogBox} from 'react-native';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
const GLOBAL = require('./Screens/Common/Globals');
import ReduxThunk from 'redux-thunk';
import reducers from './Reducers';
import SplashScreen from 'react-native-splash-screen';

LogBox.ignoreAllLogs();
export default class App extends Component {

  componentDidMount(){
    SplashScreen.hide();
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <StatusBar barStyle = "white" hidden = {false} backgroundColor = {GLOBAL.Color.c1} />
          <RootNav />
      </Provider>
    );
  }
}
