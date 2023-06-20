import React from 'react';
import { View, TouchableOpacity, Linking, Alert } from 'react-native';
import { AppIcon, AppText, AppTopBar, AppListItem } from '../Common/';
const GLOBAL = require('../Common');
import { styles } from "./styles";

export function HelpCenter({ navigation }) {

  const {
    container,
    innerView,
    topView,
    listItemContainer,
    iconViewStyle,
    iconStyle
  } = styles;

  function onItemClick(name) {
    if (name == 'none')
      Alert.alert('Under Development!');
    else if (name == 'Website')
      Linking.openURL(GLOBAL.GOOGLE_PLAY_LINK);
    else
      navigation.navigate(name);
  }

  const listItem = (navScreen, iconName, title, height) => {
    return (
      <TouchableOpacity onPress={() => onItemClick(navScreen)}>
        <AppListItem style={listItemContainer}
          marginTop={3} icon={iconName} textSize={12} iconSize={24} title={title}>
          <View style={iconViewStyle}>
            <AppIcon style={iconStyle} name={'chevron-right'} color={'#707070'} size={25} />
          </View>
        </AppListItem>
      </TouchableOpacity>
    )
  }

  return (
    <View style={container}>
      <AppTopBar title={'Help Center'} />
      <View style={innerView}>
        <View style={topView}>
          <AppIcon name={'headset'} color={GLOBAL.Color.c1} size={60} />
          <AppText text={'We are here\n to help you'} size={15} />
        </View>
        <AppText text={'Live Chat'} textAlign={'left'} size={13} />
        {listItem('none', 'chat-processing-outline', 'Customers service', 40)}
        <AppText marginTop={3} marginBottom={3} text={'Other links'} textAlign={'left'} size={13} />
        {listItem('ContactUs', 'email-outline', 'Contact Us')}
        {listItem('Terms', 'file-document', 'Terms and conditions')}
        {listItem('Privacy', 'file-document', 'Privacy Policy')}
        {listItem('Website', 'medal-outline', 'Rate Us')}
        <AppText marginTop={3} marginBottom={3} text={'Social Media'} textAlign={'left'} size={13} />
        {listItem('Website', 'snapchat', 'SnapChat')}
        {listItem('Website', 'instagram', 'Instagram')}
        {listItem('Website', 'whatsapp', 'WhatsApp')}
        {listItem('Website', 'youtube', 'YouTube')}
        {listItem('Website', 'facebook', 'FaceBook')}
        {listItem('Website', 'twitter', 'Twitter')}
      </View>
    </View>
  );
}