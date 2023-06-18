import React from 'react';
import { View, TouchableOpacity } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize, heightPixel } from './Utils/PixelNormalization';
import { AppText, AppImageBackground, AppBTN } from './';
import StarRating from 'react-native-star-rating-widget';
import * as RootNavigation from '../../RootNav.js';
import { appProductItemStyle } from "./styles";

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
    RootNavigation.navigationRef.navigate('ProductsStack', { screen: 'ProductDetails', params: { data: props.item } });
  }

  const { container, touchStyle, backgroundImageStyle, newBadgeStyle, startRatingStyle, priceStyle } = appProductItemStyle(props);

  return (
    <View style={container}>
      <TouchableOpacity activeOpacity={0.9} onPress={onClick} style={touchStyle}>
        <AppImageBackground source={{ uri: link[0] }} style={backgroundImageStyle}>
          {isNew == true ?
            <View style={newBadgeStyle}>
              <AppText color={GLOBAL.Color.white} size={8} text={'New'} />
            </View> : <View />}
        </AppImageBackground>
        <AppText margin={5} marginTop={5} size={10} textAlign={'left'} text={'\t  ' + (model ? model : '')} color={'#8A888C'} />
        <AppText margin={10} textAlign={'left'} size={10.5} color={GLOBAL.Color.darkGrey} text={name} />
        <StarRating onChange={(value) => { }} emptyColor={GLOBAL.Color.grey} starSize={normalize(20)} starStyle={{ width: '5%' }} style={startRatingStyle} rating={rating} />
        <View style={priceStyle}>
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
