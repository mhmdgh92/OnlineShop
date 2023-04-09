import React, {Component} from 'react';
import {View,ScrollView} from 'react-native';
import {fontPixel,heightPixel,widthPixel,tstOne} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppTextInput,AppBTN} from '../Common/';

class Shipping extends React.Component{

  onContinueClicked (){
    this.props.navigation.navigate('PickLocation');
  }

  render() {
    return (
      <ScrollView>
        <View style={{alignItems:'center'}}>
          <AppTopBar title={'Shipping info'}/>
          <AppTextInput marginTop={15} name={'account'} placeholder={'First name'}/>
          <AppTextInput marginTop={5} name={'account'} placeholder={'Last name'}/>
          <AppTextInput marginTop={5} name={'cellphone'} placeholder={'Phone number'}/>
          <AppTextInput marginTop={5} name={'email'} placeholder={'Email'}/>
          <AppTextInput marginTop={5} name={'map-marker'} placeholder={'Country'}/>
          <AppTextInput marginTop={5} name={'city'} placeholder={'City'}/>
          <AppTextInput marginTop={5} name={'map'} placeholder={'Province'}/>
          <AppTextInput marginTop={5} name={'sign-direction'} placeholder={'Address - Street'}/>
          <AppTextInput marginTop={5} name={'home-city'} placeholder={'Neighbour'}/>
          <AppTextInput marginTop={5} name={'home'} placeholder={'Building number'}/>
          <View style={{marginTop:heightPixel(5),width:widthPixel(320),flexDirection:'row',justifyContent:'space-between'}}>
            <AppTextInput iconFlex={3} width={155} name={'format-list-numbered'} placeholder={'Floor number'}/>
            <AppTextInput iconFlex={3} width={155} name={'home'} placeholder={'Apartment no.'}/>
          </View>
          <AppBTN text={'Continue'} marginTop={32} onPress={()=>this.onContinueClicked()}/>
        </View>
      </ScrollView>
    );
  }
}
export default Shipping;
