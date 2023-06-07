import React from 'react';
import { View } from 'react-native';
import { AppText, AppTopBar, AppLoader } from '../Common/';
import { normalize, heightPixel } from '../Common/Utils/PixelNormalization';
import { useSelector, useDispatch } from 'react-redux';

const GLOBAL = require('../Common');

export default function Wallet(props) {

  //States
  const userSlice = useSelector(state => state.user);

  const {
    balance,
    firstName
  } = userSlice.userState;

  return (
    <View style={{ alignItems: 'center', width: '100%', height: '100%' }}>
      <View style={{ top: 0, position: 'absolute', backgroundColor: GLOBAL.Color.c1, height: '25%', width: '100%' }} />
      <AppTopBar title={'My Wallet'} />
      <View style={{
        borderColor: GLOBAL.Color.grey, borderWidth: 0.5, marginTop: heightPixel(20), borderRadius: normalize(20),
        backgroundColor: '#FA9A3B', width: '91%', justifyContent: 'center', height: heightPixel(195)
      }}>
        <View style={{ justifyContent: 'space-between', alignSelf: 'center', width: '90%', height: '77%' }}>
          <AppText textAlign={'left'} text={'Balance'} color={'white'} size={17} />
          <AppText textAlign={'left'} text={'$' + (balance ? balance : 0)} color={'white'} size={42} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <AppText textAlign={'left'} text={firstName} color={'white'} size={16} />
          </View>
        </View>
      </View>
      <AppText marginTop={20} width={320} textAlign={'left'} color={GLOBAL.Color.darkGrey} text={'History'} size={20} />
      <AppText marginTop={30} width={320} color={GLOBAL.Color.darkGrey} text={'No Transactions'} size={20} />
    </View>
  );
}