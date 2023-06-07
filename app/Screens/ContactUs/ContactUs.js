import { View, Alert } from 'react-native';
import { AppTopBar, AppBTN, AppText, AppIcon, AppTextInput } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { normalize } from '../Common/Utils/PixelNormalization';

export default function ContactUs(props) {

  function onSignInClick() {
    console.log('Under development!')
    Alert.alert('Your message sent!');
    props.navigation.goBack();
  }

  return (
    <View style={{ alignItems: 'center', width: '100%', height: '100%' }}>
      <AppTopBar title={'ContactUs'} />
      <View style={{ marginTop: normalize(25), height: '18%', width: '100%' }}>
        <AppIcon name={'headset'} color={GLOBAL.Color.c1} size={60} />
        <AppText text={'We are here\n to help you'} size={15} />
      </View>
      <AppTextInput marginTop={10} name={'account'} placeholder={'Full Name'} />
      <AppTextInput keyboardType={'numeric'} marginTop={10} name={'cellphone'} placeholder={'Phone'} />
      <AppTextInput keyboardType={'email-address'} marginTop={10} name={'email'} />
      <AppTextInput height={225} borderRadius={20} textAlignVertical={'top'} alignItems={'flex-start'} hideIcon multiline
        marginTop={10} placeholder={'Message'} />
      <AppBTN onPress={() => onSignInClick()} text={'Send'} marginTop={45} />
    </View>
  );
}