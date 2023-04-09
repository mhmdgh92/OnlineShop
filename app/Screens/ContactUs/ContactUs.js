import React, {Component} from 'react';
import {View,Alert} from 'react-native';
import {fontPixel,normalize,heightPixel,widthPixel,tstOne} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppBTN,LogoAndName,AppText,AppIcon,AppTextInput} from '../Common/';
const GLOBAL = require('../Common/Globals');

class ContactUs extends React.Component{

  onSignInClick (){
    Alert.alert('Your message sent successfully');
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={{alignItems:'center',width:'100%',height:'100%'}}>
        <AppTopBar title={'ContactUs'}/>
        <View style={{marginTop:normalize(25),height:'18%',width:'100%'}}>
          <AppIcon name={'headset'} color={GLOBAL.Color.c1} size={60}/>
          <AppText text={'We are here\n to help you'} size={15}/>
        </View>
        <AppTextInput marginTop={10} name={'account'} placeholder={'Full Name'}/>
        <AppTextInput keyboardType={'numeric'} marginTop={10} name={'cellphone'} placeholder={'Phone'}/>
        <AppTextInput keyboardType={'email-address'} marginTop={10} name={'email'}/>
        <AppTextInput height={225} borderRadius={20} textAlignVertical={'top'} alignItems={'flex-start'} hideIcon multiline
         marginTop={10} placeholder={'Message'}/>
        <AppBTN onPress={()=>this.onSignInClick()} text={'Send'} marginTop={45}/>
      </View>
    );
  }
}
export default ContactUs;
