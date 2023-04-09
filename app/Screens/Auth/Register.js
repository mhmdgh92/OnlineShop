import React, {Component} from 'react';
import {TouchableOpacity,Dimensions,View,Text,ScrollView} from 'react-native';
const ScreenHeight=Dimensions.get('window').height;
const ScreenWidth=Dimensions.get('window').width;
import {AppText,LogoAndName,AppImage,AppBTN,AppTextInput,AppCheckBox} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';

class Register extends React.Component{

onSignInClick(){
  this.props.navigation.navigate('Login');
}

onSignUpClick(){
  this.props.navigation.reset({
              index: 0,
              routes: [{name: 'Home'}],
            });
}

onPrivacyClick(){
  this.props.navigation.navigate('Privacy');
}

onTermsClick(){
  this.props.navigation.navigate('Terms');
}

  render() {
    return (
      <ScrollView>
        <View style={{alignItems:'center',height:ScreenHeight*0.95,width:ScreenWidth}}>
            <LogoAndName/>
            <AppText marginTop={20} text="New account" size={26}/>
            <AppText marginTop={2} text={"Register"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
            <AppTextInput marginTop={10} keyboardType={'email-address'}/>
            <AppTextInput marginTop={10} keyboardType={'numeric'} name={'cellphone'} placeholder={'Phone'}/>
            <AppTextInput marginTop={10} secureTextEntry name={'lock'} placeholder={'Password'}/>
            <AppTextInput marginTop={10} secureTextEntry name={'lock'} placeholder={'Password confirmation'}/>
            <View style={{marginTop:heightPixel(15),flexDirection:'row',justifyContent:'center'}}>
              <AppCheckBox/>
              <AppText text={"\t \t I agree to the "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'}/>
              <TouchableOpacity onPress={()=>this.onPrivacyClick()}><AppText text={"privacy policy"} textStyle={{textDecorationLine:'underline'}} color={'blue'} size={12} fontFamily={'Montserrat-SemiBold'}/></TouchableOpacity>
              <AppText text={" and "} color={GLOBAL.Color.darkGrey} size={12} fontFamily={'Montserrat-SemiBold'}/>
              <TouchableOpacity onPress={()=>this.onTermsClick()}><AppText text={"terms of use"} color={'blue'} textStyle={{textDecorationLine:'underline'}} size={12} fontFamily={'Montserrat-SemiBold'}/></TouchableOpacity>
            </View>
            <AppBTN marginTop={40} onPress={()=>this.onSignUpClick()} text={'Register'}/>
            <View style={{marginTop:heightPixel(55),flexDirection:'row'}}>
              <AppText text={"Have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'}/>
              <TouchableOpacity onPress={()=>this.onSignInClick()}><AppText text={" Sign in"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'}/></TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}
export default Register;
