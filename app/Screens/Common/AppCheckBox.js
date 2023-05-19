import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize } from './Utils/PixelNormalization';

const AppCheckBox = () => {
  return (
    <View style={{ borderWidth: normalize(4), borderColor: GLOBAL.Color.c3, width: '4.5%', height: normalize(20), justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ backgroundColor: GLOBAL.Color.c3, width: '60%', height: '60%' }} />
    </View>
  );
};

export default AppCheckBox;
