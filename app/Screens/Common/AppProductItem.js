import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize, heightPixel, widthPixel } from './Utils/PixelNormalization';
import { AppText, AppIcon, AppImageBackground, AppBTN } from './';
import StarRating from 'react-native-star-rating-widget';
import * as RootNavigation from '../../RootNav.js';

const AppProductItem = (props) => {

  const {
    link,
    model,
    name,
    oldPrice,
    price,
    rating,
    isNew
  } = props.item;

  const onClick = () => {
    RootNavigation.navigationRef.navigate('ProductDetails', {
      data: props.item
    });
  }

  return (
    <View style={{ borderColor: GLOBAL.Color.borderColor, borderWidth: 1, alignItems: 'center', backgroundColor: 'white', margin: widthPixel(5), width: widthPixel(170), height: props.height ? props.height : '100%' }}>
      <TouchableOpacity activeOpacity={0.9} onPress={onClick} style={{ height: '47%', width: '100%' }}>
        <AppImageBackground source={{ uri: link[0] }} style={{ marginTop: '2%', width: '100%', height: '100%' }}>
          {isNew == true ?
            <View style={{ borderRadius: normalize(7), margin: normalize(7), alignItems: 'center', justifyContent: 'center', backgroundColor: GLOBAL.Color.c1, width: '27.5%', height: '15%' }}>
              <AppText color={GLOBAL.Color.white} size={8} text={'New'} />
            </View> : <View />}
        </AppImageBackground>
        <AppText margin={5} marginTop={5} size={10} textAlign={'left'} text={'\t  ' + (model ? model : '')} color={'#8A888C'} />
        <AppText margin={10} textAlign={'left'} size={10.5} color={GLOBAL.Color.darkGrey} text={name} />
        <StarRating onChange={null} emptyColor={GLOBAL.Color.grey} starSize={normalize(20)} starStyle={{ width: '5%' }} style={{ alignItems: 'center', width: '45%', height: '10%' }} rating={rating} />
        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', margin: normalize(13) }}>
          <View>
            <AppText crossed text={'$' + oldPrice} size={11} color={GLOBAL.Color.grey} textAlign='left' />
            <AppText marginTop={3} text={'$' + price} size={12} color={GLOBAL.Color.c1} textAlign='left' />
          </View>
        </View>
        <AppBTN text={'View Details'} textColor={GLOBAL.Color.c1} height={heightPixel(30)} onPress={onClick}
          width={heightPixel(150)} textSize={11} borderColor={GLOBAL.Color.c1} borderWidth={3} color={'transparent'} borderRadius={7} />
      </TouchableOpacity>
    </View>
  );
};
export default AppProductItem;
