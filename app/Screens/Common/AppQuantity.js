import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { AppIcon, AppText } from './';

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

  const {
    width,
    height
  } = props;

  return (
    <View style={{ backgroundColor: '#F7F7F7', borderColor: GLOBAL.Color.borderColor, borderWidth: 1, flexDirection: 'row', width: width ? width : '35%', height: height ? height : '90%' }}>
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '25%' }} onPress={decAmount}><AppIcon size={24} color={GLOBAL.Color.c1} name={'minus'} /></TouchableOpacity>
      <AppText size={17} text={quantity} style={{ justifyContent: 'center', width: '50%' }} />
      <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: '25%' }} onPress={incAmount}><AppIcon size={27} color={GLOBAL.Color.c1} name={'plus'} /></TouchableOpacity>
    </View>
  );
}
export default AppQuantity;
