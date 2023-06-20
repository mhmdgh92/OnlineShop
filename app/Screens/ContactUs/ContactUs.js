import { View, Alert } from 'react-native';
import { AppTopBar, AppBTN, AppText, AppIcon, AppTextInput } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { styles } from "./styles";

export function ContactUs({navigation}) {

  const {
    container,
    topView
  } = styles;

  function onSignInClick() {
    Alert.alert('Your message sent!');
    navigation.goBack();
  }

  return (
    <View style={container}>
      <AppTopBar title={'ContactUs'} />
      <View style={topView}>
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