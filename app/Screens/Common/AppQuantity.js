import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { AppIcon, AppText } from './';
import { appQuantityStyle } from "./styles";

const AppQuantity = (props) => {

  const [quantity, setQuantity] = useState(props.quantity ? props.quantity : 1);

  const incAmount = () => {
    setQuantity(quantity + 1);
    triggerEvents(true);
  }

  const decAmount = () => {
    if (quantity <= 1)
      return;
    setQuantity(quantity - 1);
    triggerEvents(false);
  }

  function triggerEvents(plusOrMinus) {
    if (props.updateQuantity)
      props.updateQuantity(quantity + (plusOrMinus ? 1 : -1));
    if (props.plusOrMinusQuantity)
      props.plusOrMinusQuantity(plusOrMinus);
  }

  const { container, touchStyle, textStyle } = appQuantityStyle(props);

  return (
    <View style={container}>
      <TouchableOpacity style={touchStyle} onPress={decAmount}><AppIcon size={24} color={GLOBAL.Color.c1} name={'minus'} /></TouchableOpacity>
      <AppText size={17} text={quantity} style={textStyle} />
      <TouchableOpacity style={touchStyle} onPress={incAmount}><AppIcon size={27} color={GLOBAL.Color.c1} name={'plus'} /></TouchableOpacity>
    </View>
  );
}
export default AppQuantity;
