import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const AppLoader = (props) => {
  return <View  style={{backgroundColor:'red',alignSelf:'center',width:50,height:50}}/>//T,R
  return (
    <ActivityIndicator style={{ flex: 1, alignSelf: 'center', justifyContent: 'center', alignItems: 'center' }} />
  );
}

export default AppLoader;
