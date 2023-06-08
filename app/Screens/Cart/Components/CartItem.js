import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { normalize, heightPixel, widthPixel } from '../../Common/Utils/PixelNormalization';
const { AppImage, AppText, AppIcon, AppQuantity } = require('../../Common/');
import { cartItemStyle } from "./style";

const CartItem = (props) => {

  const {
    key,
    item,
    onPlusOrMinusQuantity
  } = props;

  const {
    id,
    name,
    link,
    price,
    quantity
  } = item;

  const {
    container,
    innerView,
    quantityStyle
  } = cartItemStyle;

  function plusOrMinusQuantity(plusOrMinus) {
    onPlusOrMinusQuantity(id, plusOrMinus);
  }

  return (
    <View style={container}>
      <AppImage resizeMode={'cover'} source={{ uri: link }} width={90} height={96} />
      <View style={innerView}>
        <AppText numberOfLines={2} textAlign={'left'} text={name} size={12} />
        <AppText marginTop={5} text={'$' + price} size={12} />
      </View>
      <View style={quantityStyle}>
        <AppQuantity plusOrMinusQuantity={plusOrMinusQuantity} quantity={quantity} height={'30%'} width={'70%'} />
      </View>
    </View>
  );
}

export default CartItem;
