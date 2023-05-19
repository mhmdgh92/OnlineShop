import React from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
import { normalize, heightPixel, widthPixel } from '../../Common/Utils/PixelNormalization';
const { AppText, AppIcon } = require('../../Common/');

const OrderItem = (props) => {

  const {
    id,
    totalPrice,
    noOfItems,
    status,
    date
  } = props.item;

  function Status(props) {
    const status = props.status;
    var statusText;
    var iconName;
    var color;
    switch (status) {
      case 0:
        statusText = 'Waiting';
        iconName = 'timer-sand';
        color = GLOBAL.Color.darkGrey;
        break;
      case 1:
        statusText = 'Completed';
        iconName = 'check-bold';
        color = 'green';
        break;
      case 2:
        statusText = 'Cancelled';
        iconName = 'close';
        color = 'red';
        break;
      default:
        statusText = 'Cancelled';
        iconName = 'close';
        color = 'red';
        break;
    }
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <AppIcon name={iconName} size={20} color={color} />
        <AppText text={' ' + statusText} size={11} color={color} textAlign='left' />
      </View>
    );
  }

  return (
    <View style={{
      borderColor: GLOBAL.Color.borderColor, flexDirection: 'row',
      borderWidth: normalize(2.5), height: heightPixel(85), marginTop: heightPixel(10), width: '90%'
    }}>
      <View style={{ margin: widthPixel(7), flexDirection: 'column', flex: 5 }}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <AppText text={'#' + id} size={16} color={GLOBAL.Color.c1} textAlign='left' />
          <AppText text={`\t Total ($${totalPrice} - ${noOfItems} items)`} size={12} color={GLOBAL.Color.darkGrey} textAlign='left' />
        </View>
        <View style={{ alignItems: 'center', flexDirection: 'row', flex: 1 }}>
          <AppIcon name={'calendar'} size={25} color={GLOBAL.Color.darkGrey} />
          <AppText text={' ' + date + '\t'} size={11} color={GLOBAL.Color.darkGrey} textAlign='left' />
          <Status status={status} />
        </View>
      </View>
      <View style={{ margin: widthPixel(7), alignItems: 'center', justifyContent: 'center', flex: 2 }}>
        <AppText width={80} height={35} borderWidth={1} borderRadius={100} borderColor={GLOBAL.Color.c1} text={'Show'} size={14} color={GLOBAL.Color.darkGrey} />
      </View>
    </View>
  );
}

export default OrderItem;
