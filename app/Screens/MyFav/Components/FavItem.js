import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { normalize, heightPixel, widthPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage, AppText, AppIcon } = require('../../Common/');

export const FavItem = (props) => {

  const {
    link,
    name,
    oldPrice,
    price,
  } = props.item;

  return (
    <View style={{
      backgroundColor: GLOBAL.Color.white,
      borderColor: GLOBAL.Color.borderColor, flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
      borderWidth: normalize(2.5), height: heightPixel(100), marginTop: heightPixel(10), width: '90%'
    }}>
      <View style={{ justifyContent: 'center', margin: widthPixel(10), alignItems: 'center', flex: 3 }}><AppImage source={link} height={82} /></View>
      <View style={{ flex: 4, height: '80%', justifyContent: 'space-between' }}>
        <AppText text={name} size={12} color={GLOBAL.Color.darkGrey} textAlign='left' />
        <AppText crossed text={'$' + oldPrice} size={11} color={GLOBAL.Color.grey} textAlign='left' />
        <AppText text={'$' + price} size={12} color={GLOBAL.Color.darkGrey} textAlign='left' />
      </View>
      <View style={{ alignItems: 'flex-end', justifyContent: 'flex-end', padding: widthPixel(10), height: '90%', flex: 2 }}>
        <AppText text={'28-2-2023'} size={10} color={GLOBAL.Color.darkGrey} textAlign='left' />
      </View>
    </View>
  );
}