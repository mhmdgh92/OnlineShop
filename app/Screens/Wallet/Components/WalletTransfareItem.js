import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {normalize,heightPixel,widthPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage,AppText,AppIcon} = require('../../Common/');

  const WalletTransfareItem = (props) => {

    const {
      name,
      date,
      notes,
      type,
      amount,
    } = props.item;

    var deposit= type=='Deposit'?true:false;

    return (
      <View style={{backgroundColor:GLOBAL.Color.white,
        borderColor:GLOBAL.Color.borderColor,flexDirection:'row',justifyContent:'center',alignItems:'center',
        borderWidth:normalize(2.5),height:heightPixel(95),marginTop:heightPixel(10),width:widthPixel(330)}}>
        <View style={{justifyContent:'space-between',width:'90%',height:'65%'}}>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:'50%'}}>
            <AppText textAlign={'left'} text={name} size={17}/>
            <AppText textAlign={'left'} text={ (deposit?'+':'-')+ amount} color={deposit?'green':'red'} size={17}/>
          </View>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:'100%',height:'50%'}}>
            <AppText textAlign={'left'} text={notes} color={'grey'} size={15}/>
            <AppText textAlign={'left'} text={date} color={'grey'} size={15}/>
          </View>
        </View>
      </View>
    );
}

export default WalletTransfareItem;
