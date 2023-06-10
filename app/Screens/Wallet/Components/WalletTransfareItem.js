import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
const { AppText } = require('../../Common/');
import { styles } from "./styles";

const WalletTransfareItem = (props) => {

  const {
    name,
    date,
    notes,
    type,
    amount,
  } = props.item;

  const {
    container,
    innerView,
    rowView
  } = styles;

  var deposit = type == 'Deposit' ? true : false;

  return (
    <View style={container}>
      <View style={innerView}>
        <View style={rowView}>
          <AppText textAlign={'left'} text={name} size={17} />
          <AppText textAlign={'left'} text={(deposit ? '+' : '-') + amount} color={deposit ? 'green' : 'red'} size={17} />
        </View>
        <View style={rowView}>
          <AppText textAlign={'left'} text={notes} color={'grey'} size={15} />
          <AppText textAlign={'left'} text={date} color={'grey'} size={15} />
        </View>
      </View>
    </View>
  );
}

export default WalletTransfareItem;
