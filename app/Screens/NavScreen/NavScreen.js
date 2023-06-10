import React, { useEffect } from 'react';
import { View, Alert, TouchableOpacity } from 'react-native';
import { AppIcon, AppImage, AppText, AppTopBar, AppListItem, AppBottomBar } from '../Common/';
const GLOBAL = require('../Common');
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from "../../redux/slices/userSlice";
import RNRestart from 'react-native-restart';
import { styles } from "./styles";

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

  const {
    container,
    innerView,
    topView,
    listItemStyle,
    listItemIconStyle,
    nameAndLogoView
  } = styles;

  useEffect(() => {
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
        <AppListItem borderColor={'transparent'} style={listItemStyle} marginTop={6}
          icon={iconName} alignItems={'flex-end'} iconSize={24} title={title}>
          <View style={listItemIconStyle}>
            <AppIcon name={'chevron-right'} color={'#707070'} size={25} />
          </View>
        </AppListItem>
      </TouchableOpacity>
    )
  }

  return (
    <View style={container}>
      <AppTopBar title={'My Profile'} hideLeft />
      <View style={innerView}>
        <View style={topView}>
          <AppImage source={require('../../Assets/Logo.png')} width={40} />
          <View style={nameAndLogoView}>
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
