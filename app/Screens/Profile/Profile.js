import React, {Component} from 'react';
import {Dimensions,View,ScrollView} from 'react-native';
const ScreenWidth=Dimensions.get('window').width;
import {AppRoundedImage,AppTextInput,AppTopBar,AppText,AppBTN,AppBottomBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import {fontPixel,heightPixel,widthPixel,tstOne} from '../Common/Utils/PixelNormalization';

class Profile extends React.Component{
  render() {
    return (
      <View>
        <ScrollView>
          <View style={{alignItems:'center',
          flexDirection:'column',
          height:heightPixel(787),width:ScreenWidth}}>
            <AppTopBar/>
          <AppRoundedImage marginTop={10} width={110} height={115}/>
          <AppTextInput marginTop={15} name={'account'} placeholder={'First name'}/>
          <AppTextInput marginTop={5} name={'account'} placeholder={'Last name'}/>
          <AppTextInput marginTop={5} name={'cellphone'} keyboardType={'numeric'} placeholder={'Phone'}/>
          <AppTextInput marginTop={5}/>
          <AppText marginTop={14} text={"Change your password"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'}/>
          <AppTextInput marginTop={15} name={'lock'} secureTextEntry placeholder={'Password'}/>
          <AppTextInput marginTop={5} name={'lock'} secureTextEntry placeholder={'New password'}/>
          <AppTextInput marginTop={5} name={'lock'} secureTextEntry placeholder={'Confirm new password'}/>
          <AppBTN text={'Save'} marginTop={20}/>
          </View>
        </ScrollView>
        <AppBottomBar choosed={4}/>
      </View>
    );
  }
}



export default Profile;
