import React from 'react';
import { View } from 'react-native';
import { AppText, AppTopBar } from '../Common/';
import { useSelector } from 'react-redux';
import { styles } from "./styles";
const GLOBAL = require('../Common');
import PropTypes from "prop-types";

export function Wallet() {

  //States
  const userSlice = useSelector(state => state.user);

  const {
    balance = 0,
    firstName = '',
  } = userSlice.userState;

  const {
    container,
    topCardView,
    innerView,
    cardStyle,
    nameStyle
  } = styles;

  return (
    <View style={container}>
      <View style={topCardView} />
      <AppTopBar title={'My Wallet'} />
      <View style={innerView}>
        <View style={cardStyle}>
          <AppText textAlign={'left'} text={'Balance'} color={'white'} size={17} />
          <AppText textAlign={'left'} text={'$' + (balance ? balance : 0)} color={'white'} size={42} />
          <View style={nameStyle}>
            <AppText textAlign={'left'} text={firstName} color={'white'} size={16} />
          </View>
        </View>
      </View>
      <AppText marginTop={20} width={320} textAlign={'left'} color={GLOBAL.Color.darkGrey} text={'History'} size={20} />
      <AppText marginTop={30} width={320} color={GLOBAL.Color.darkGrey} text={'No Transactions'} size={20} />
    </View>
  );
}