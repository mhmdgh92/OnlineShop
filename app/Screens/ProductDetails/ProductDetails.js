import React, {Component} from 'react';
import {View,ScrollView,StyleSheet} from 'react-native';
import {heightPixel,widthPixel,normalize} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppText,AppPicker,AppBTN,AppQuantity,AppHorListOfItems} from '../Common/';
const GLOBAL = require('../Common/Globals');
import Data from '../MockData/data';
import Swiper from 'react-native-swiper';
import {Photos,SaleBadge,LoveAndShare,Details} from './Components/';

class ProductDetails extends React.Component{

  onCheckOutClicked(){
    this.props.navigation.navigate('Cart');
  }
  
  render() {

    const{
      name,
      images
    }=Data.ProductDetails;

    return (
      <View style={{height:'100%',width:'100%'}}>
        <View style={{height:'8%',width:'100%'}}><AppTopBar title={name}/></View>
        <View style={{height:'92%',width:'100%'}}>
        <ScrollView>
          <View style={{alignItems:'center'}}>
          <Photos images={images}/>
          <SaleBadge/>
          <LoveAndShare/>
          <Details/>
          <AppText style={{marginTop:heightPixel(13),justifyContent:'center',backgroundColor:GLOBAL.Color.borderColor,width:'95%',height:heightPixel(45)}}
           color={GLOBAL.Color.darkGrey} text={'Shipping free'}/>
          <AppPicker items={['Small','Medium','Large']} style={{width:'95%',marginTop:heightPixel(15),backgroundColor:GLOBAL.Color.borderColor}} />
          <View style={{alignSelf:'center',flexDirection:'row',marginTop:heightPixel(15),alignItems:'center',width:'95%',height:heightPixel(40)}}>
          <AppBTN textSize={14} width={'60%'} height={'100%'} text={'Add to cart'} borderRadius={8}/>
          <View style={{width:'2%'}}/>
          <AppQuantity/>
          </View>
          </View>
          <AppText color={GLOBAL.Color.c1} text={'Details'} size={15} marginTop={30} style={{width:'92%',alignSelf:'center',alignItems:'flex-start'}}/>
          <AppText textAlign={'left'} text={Data.ProductDetails.desc} marginTop={15} size={13} style={{width:'92%',alignSelf:'center',alignItems:'flex-start'}}/>
          <AppHorListOfItems title={'Similar Products'} hideShowAll={true} titleColor={GLOBAL.Color.c1} style={{marginBottom:heightPixel(100)}} data={Data.Home.MostOrdered}/>
        </ScrollView>
        <AppBTN onPress={()=>this.onCheckOutClicked()} text={'CheckOut'} style={{position:'absolute',bottom:heightPixel(30)}}/>
        </View>
      </View>
    );
  }
}


export default ProductDetails;
