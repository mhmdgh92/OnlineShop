import React from 'react';
import { View } from 'react-native';
const { AppImage, AppText, AppQuantity } = require('../../Common/');
import { cartItemStyle } from "./style";
import PropTypes from 'prop-types';

export const CartItem = ({ item, onPlusOrMinusQuantity }) => {

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

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  onPlusOrMinusQuantity: PropTypes.func.isRequired
};
