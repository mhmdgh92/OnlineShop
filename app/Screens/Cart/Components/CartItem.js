import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {normalize,heightPixel,widthPixel} from '../../Common/Utils/PixelNormalization';
const {AppImage,AppText,AppIcon,AppQuantity} = require('../../Common/');

  const CartItem = (props) => {

    const {
      id,
      name,
      image,
      price
    } = props.item;

function onUpdateQuantity(num,plusOrMinus){
  props.onUpdateQuantity(id-1,num,plusOrMinus);
}

    return (
      <View style={{backgroundColor:GLOBAL.Color.white,
        borderColor:GLOBAL.Color.borderColor,flexDirection:'row',
        borderWidth:normalize(2.5),height:heightPixel(100),alignItems:'center',marginTop:heightPixel(10),width:widthPixel(320)}}>
        <AppImage resizeMode={'cover'} source={image} width={90} height={96}/>
        <View style={{margin:widthPixel(10),alignItems:'flex-start',justifyContent:'space-between',height:'45%',width:'35%'}}>
          <AppText text={name} size={15}/>
          <AppText text={'$'+price} size={15}/>
        </View>
        <View style={{justifyContent:'center',height:'95%',width:'38%'}}>
            <AppQuantity updateQuantity={onUpdateQuantity} height={'30%'} width={'70%'}/>
        </View>
      </View>
    );
}

export default CartItem;
