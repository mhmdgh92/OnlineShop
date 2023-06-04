import React, {Component} from 'react';
import {View,TouchableOpacity,Linking,Alert} from 'react-native';
import {AppIcon,AppText,AppTopBar,AppTextInput,AppListItem,AppToggleBTN,AppPicker} from '../Common/';
import {fontPixel,normalize,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
const GLOBAL = require('../Common');

class HelpCenter extends React.Component{

onItemClick(name){
  if(name=='none')
    Alert.alert('Under Development!');
  else if(name=='Website')
    Linking.openURL(GLOBAL.GOOGLE_PLAY_LINK);
  else
    this.props.navigation.navigate(name);
}

  render() {

    const listItem = (navScreen,iconName,title,height) => {
    return (
      <TouchableOpacity onPress={()=>this.onItemClick(navScreen)}>
        <AppListItem style={{height:heightPixel(height?height:36)}} marginTop={3} icon={iconName} textSize={12} iconSize={24} title={title}>
          <View style={{justifyContent:'center',alignItems:'flex-end',flex:1}}>
            <AppIcon style={{width:'20%'}} name={'chevron-right'} color={'#707070'} size={25}/>
          </View>
        </AppListItem>
      </TouchableOpacity>
    )
  }

    return (
      <View style={{alignItems:'center',width:'100%',height:'100%'}}>
        <AppTopBar title={'Help Center'}/>
        <View style={{width:'90%',height:'90%'}}>
          <View style={{marginTop:normalize(15),height:'18%',width:'100%'}}>
            <AppIcon name={'headset'} color={GLOBAL.Color.c1} size={60}/>
            <AppText text={'We are here\n to help you'} size={15}/>
          </View>
          <AppText text={'Live Chat'} textAlign={'left'} size={13}/>
          {listItem('none','chat-processing-outline','Customers service',40)}
          <AppText marginTop={3} marginBottom={3} text={'Other links'} textAlign={'left'} size={13}/>
          {listItem('ContactUs','Email-outline','Contact Us')}
          {listItem('Terms','file-document','Terms and conditions')}
          {listItem('Privacy','file-document','Privacy Policy')}
          {listItem('Website','medal-outline','Rate Us')}
          <AppText marginTop={3} marginBottom={3} text={'Social Media'} textAlign={'left'} size={13}/>
          {listItem('Website','snapchat','SnapChat')}
          {listItem('Website','instagram','Instagram')}
          {listItem('Website','whatsapp','WhatsApp')}
          {listItem('Website','youtube','YouTube')}
          {listItem('Website','facebook','FaceBook')}
          {listItem('Website','twitter','Twitter')}
        </View>
      </View>
    );
  }

}
export default HelpCenter;
