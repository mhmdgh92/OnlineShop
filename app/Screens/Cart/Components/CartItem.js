import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { normalize, heightPixel, widthPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage, AppText, AppIcon, AppQuantity } = require('../../Common/');

const CartItem = (props) => {

  const {
    id,
    name,
    link,
    price,
    quantity
  } = props.item;

  function plusOrMinusQuantity(plusOrMinus) {
    props.onPlusOrMinusQuantity(id, plusOrMinus);
  }

  return (
    <View style={{
      backgroundColor: GLOBAL.Color.white,
      borderColor: GLOBAL.Color.borderColor, flexDirection: 'row',
      borderWidth: normalize(2.5), height: heightPixel(100), alignItems: 'center',
      marginTop: heightPixel(10), width: widthPixel(320)
    }}>
      <AppImage resizeMode={'cover'} source={{ uri: link }} width={90} height={96} />
      <View style={{ margin: widthPixel(10), alignItems: 'flex-start', justifyContent: 'space-between', height: '45%', width: '35%' }}>
        <AppText numberOfLines={2} textAlign={'left'} text={name} size={12} />
        <AppText marginTop={5} text={'$' + price} size={12} />
      </View>
      <View style={{ justifyContent: 'center', height: '95%', width: '38%' }}>
        <AppQuantity plusOrMinusQuantity={plusOrMinusQuantity} quantity={quantity} height={'30%'} width={'70%'} />
      </View>
    </View>
  );
}

export default CartItem;
