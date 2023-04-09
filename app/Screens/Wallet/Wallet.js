import React, {Component} from 'react';
import {View} from 'react-native';
import {AppIcon,AppImage,AppText,AppTopBar,AppListItem,AppBottomBar,AppFlatList} from '../Common/';
import {fontPixel,normalize,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
const GLOBAL = require('../Common');
import WalletTransfareItem from './Components/WalletTransfareItem';
import Data from './data';

class Wallet extends React.Component{

  render() {

    return (
      <View style={{alignItems:'center',width:'100%',height:'100%'}}>
        <View style={{top:0,position:'absolute',backgroundColor:GLOBAL.Color.c1,height:'25%',width:'100%'}}/>
        <AppTopBar title={'My Wallet'}/>
        <View style={{borderColor:GLOBAL.Color.grey,borderWidth:0.5,marginTop:heightPixel(20),borderRadius:normalize(20),
        backgroundColor:'#FA9A3B',width:'91%',justifyContent:'center',height:heightPixel(195)}}>
            <View style={{justifyContent:'space-between',alignSelf:'center',width:'90%',height:'77%'}}>
              <AppText textAlign={'left'} text={'Balance'} color={'white'} size={17}/>
              <AppText textAlign={'left'} text={'$35,459.00'} color={'white'} size={42}/>
              <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <AppText textAlign={'left'} text={'Mohammed Ghabyen'} color={'white'} size={16}/>
                <AppText textAlign={'left'} text={'ID:12345678'} color={'white'} size={16}/>
              </View>
            </View>
        </View>
        <AppText marginTop={20} width={320} textAlign={'left'} color={GLOBAL.Color.darkGrey} text={'History'} size={20}/>
        <AppFlatList numColumns={1} data={Data} renderItem={({item})=> <WalletTransfareItem item={item}/>}/>
      </View>
    );
  }

}
export default Wallet;
