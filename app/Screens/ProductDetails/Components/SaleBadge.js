import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { normalize, heightPixel } from '../../Common/Utils/PixelNormalization';
const { AppText } = require('../../Common/');

const SaleBadge = (props) => {

  const { discount } = props;

  return (
    <View style={{
      position: 'absolute', top: 5, left: 0, borderRadius: normalize(55), margin: normalize(7), alignItems: 'center', justifyContent: 'center',
      backgroundColor: '#D57C34', width: '20%', height: heightPixel(30)
    }}>
      <AppText color={GLOBAL.Color.white} size={8} text={(discount ? discount : '50') + '% Discount'} />
    </View>
  );
}

export default SaleBadge;
