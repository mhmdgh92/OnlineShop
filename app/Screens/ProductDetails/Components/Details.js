import React from 'react';
import {View} from 'react-native';
const GLOBAL = require('../../Common/Globals');
import {normalize,heightPixel} from '../../Common/Utils/PixelNormalization';
const {AppText,AppIcon} = require('../../Common/');
import StarRating from 'react-native-star-rating-widget';

  const Details = (props) => {

    const onChangeRating = () => {

    }

        return (
          <View style={{alignSelf:'center',width:'95%',height:heightPixel(130)}}>
            <View style={{justifyContent:'space-between',alignItems:'center',flexDirection:'row',height:'25%'}}>
              <AppText color={GLOBAL.Color.c1} text={'Pure Beauty'}/>
              <View style={{alignItems:'center',flexDirection:'row'}}>
                <AppText crossed text={'$200\t'} size={15} color={'#AEAEAE'} />
                <AppText backgroundColor={'#F9B6B2'} text={' 50%'} size={12} color={'red'} />
              </View>
            </View>
            <View style={{justifyContent:'space-between',flexDirection:'row',width:'100%',height:'50%'}}>
              <View style={{width:'75%'}}>
                <AppText text={'Product name and some other details about product'} textAlign={'left'} size={16}  />
              </View>
              <View style={{width:'25%'}}>
                <AppText text={' $100'} size={20} color={GLOBAL.Color.c1}/>
              </View>
            </View>
            <View style={{alignItems:'center',flexDirection:'row',width:'100%',height:'25%'}}>
              <StarRating onChange={onChangeRating} emptyColor={GLOBAL.Color.grey} starSize={normalize(20)} starStyle={{width:'5%'}}
              style={{alignItems:'center',width:'25%'}} rating={3}/>
              <AppText text={'3.0'} size={15} color={GLOBAL.Color.darkGold}/>
            </View>
          </View>
        );
    }


export default Details;
