import React, { useEffect } from 'react';
import { View } from 'react-native';
import { TestChildComp } from './Components/';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Test() {

  return (
    <View style={{ flex:1 }}>
      <TouchableOpacity style={{ backgroundColor: 'red', height:'10%',width:'10%' }}>
      </TouchableOpacity>
    </View>
  );
}