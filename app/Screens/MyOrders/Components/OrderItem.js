import React, { useEffect } from 'react';
import { View } from 'react-native';
const GLOBAL = require('../../Common/Globals');
const { AppText, AppIcon } = require('../../Common/');
import { orderItemStyle } from "./styles";
import PropTypes from 'prop-types';

export const OrderItem = ({ item }) => {

  useEffect(() => {
  }, []);

  const {
    id = 0,
    totalPrice = 0,
    noOfItems = 1,
    status = 0,
    date = "18 Jul 2023"
  } = item;

  const {
    statusStyle,
    container,
    innerView,
    totalItemsStyle,
    calendarStyle,
    showBTNStyle
  } = orderItemStyle;

  function Status() {
    const status = item.status;
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
      <View style={statusStyle}>
        <AppIcon name={iconName} size={20} color={color} />
        <AppText text={' ' + statusText} size={11} color={color} textAlign='left' />
      </View>
    );
  }

  return (
    <View style={container}>
      <View style={innerView}>
        <View style={totalItemsStyle}>
          <AppText text={'#' + id} size={16} color={GLOBAL.Color.c1} textAlign='left' />
          <AppText text={`\t Total ($${totalPrice} - ${noOfItems} items)`} size={12} color={GLOBAL.Color.darkGrey} textAlign='left' />
        </View>
        <View style={calendarStyle}>
          <AppIcon name={'calendar'} size={25} color={GLOBAL.Color.darkGrey} />
          <AppText text={' ' + date + '\t'} size={11} color={GLOBAL.Color.darkGrey} textAlign='left' />
          <Status status={status} />
        </View>
      </View>
      <View style={showBTNStyle}>
        <AppText width={80} height={35} borderWidth={1} borderRadius={100} borderColor={GLOBAL.Color.c1} text={'Show'} size={14} color={GLOBAL.Color.darkGrey} />
      </View>
    </View>
  );
}

OrderItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    totalPrice: PropTypes.number.isRequired,
    noOfItems: PropTypes.number.isRequired,
    status: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired
  }).isRequired
};
