import React, { useEffect } from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { AppIcon, AppImage, AppText, AppTopBar, AppListItem, AppBottomBar } from '../Common/';
import { normalize, heightPixel, widthPixel } from '../Common/Utils/PixelNormalization';
const GLOBAL = require('../Common');
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from "../../redux/slices/userSlice";
import RNRestart from 'react-native-restart';

export default function NavScreen(props) {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  //User Reducers
  const RemoveUser = () => { dispatch(removeUser()); }

  const {
    userRemoveSuccess
  } = userSlice;

  useEffect(() => {
    console.log('userRemoveSuccess:' + userRemoveSuccess)
    if (userRemoveSuccess)
      RNRestart
        .restart();
  }, [userRemoveSuccess]);

  async function navToThisScreen(screenName) {
    if (screenName == 'Under Development')
      Alert.alert('Under Development');
    else if (screenName == 'LogOut')
      await RemoveUser();
    else
      props.navigation.navigate(screenName);
  }

  const listItem = (iconName, title, screenName) => {
    return (
      <TouchableOpacity onPress={() => navToThisScreen(screenName)}>
        <AppListItem borderColor={'transparent'} style={{ height: heightPixel(50) }} marginTop={6}
          icon={iconName} alignItems={'flex-end'} iconSize={24} title={title}>
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <AppIcon name={'chevron-right'} color={'#707070'} size={25} />
          </View>
        </AppListItem>
      </TouchableOpacity>
    )
  }

  return (
    <View style={{ alignItems: 'center', width: '100%', height: '100%' }}>
      <AppTopBar title={'My Profile'} hideLeft />
      <View style={{ width: '90%', height: '90%' }}>
        <View style={{ backgroundColor: 'white', flexDirection: 'row', marginTop: normalize(15), height: '12%', width: '100%' }}>
          <AppImage source={require('../../Assets/Logo.png')} width={40} />
          <View style={{ margin: normalize(8), justifyContent: 'center' }}>
            <AppText text={'\tWelcome, Mohammed'} textAlign={'left'} color={GLOBAL.Color.c1} size={15} />
            <AppText text={'\tmohammedghabyen@gmail.com'} color={GLOBAL.Color.grey} size={13} textAlign={'left'} />
          </View>
        </View>
        {listItem('information-outline', 'My Info', 'Profile')}
        {listItem('heart-outline', 'Favourites', 'MyFav')}
        {listItem('package-variant-closed', 'My Orders', 'MyOrders')}
        {listItem('map-marker', 'My Addresses', 'Under Development')}
        {listItem('wallet', 'Wallet', 'Wallet')}
        {listItem('comment-question-outline', 'Help Center', 'HelpCenter')}
        {listItem('cog', 'Settings', 'Settings')}
        {listItem('information-outline', 'About Us', 'About')}
        {listItem('logout', 'LogOut', 'LogOut')}
        <AppText marginTop={13} text={'App Version:0.0.1'} color={GLOBAL.Color.grey} size={13} />
      </View>
      <AppBottomBar choosed={4} />
    </View>
  );
}
