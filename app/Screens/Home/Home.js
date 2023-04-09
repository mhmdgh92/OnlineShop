import React, {Component} from 'react';
import {View,StyleSheet,Text,ScrollView} from 'react-native';
import {AppTopBar,AppSearchBar,AppFlatList,AppImage,AppBottomBar,AppHorListOfItems} from '../Common/';
import {BigPromo,TwoPromos,WideBanner} from './Components/';
import {fontPixel,normalize,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import Data from '../MockData/data';

class Home extends React.Component{

  render() {
    return (
      <View style={{height:'100%',width:'100%'}}>
        <View style={{height:'10%',width:'100%'}}><AppSearchBar/></View>
        <View style={{marginTop:normalize(3),height:'82%',width:'100%'}}>
        <ScrollView>
          <View style={{alignItems:'center'}}>
            <BigPromo/>
            <TwoPromos/>
            <WideBanner source={require('./Components/SamplePhotos/WideBanner1-1.png')}/>
            <AppHorListOfItems data={Data.Home.MostOrdered}/>
            <WideBanner source={require('./Components/SamplePhotos/WideBanner1-2.png')}/>
            <AppHorListOfItems title={'New Products'} data={Data.Home.NewProducts}/>
            <WideBanner source={require('./Components/SamplePhotos/WideBanner1-3.png')}/>
            <AppHorListOfItems title={'Prefumes'} data={Data.Home.Perfumes}/>
            <WideBanner source={require('./Components/SamplePhotos/WideBanner1-4.png')}/>
            <AppHorListOfItems title={'Clothes'} data={Data.Home.Clothes}/>
            <WideBanner source={require('./Components/SamplePhotos/WideBanner1-5.png')}/>
            <WideBanner source={require('./Components/SamplePhotos/WideBanner1-6.png')}/>
            <AppHorListOfItems title={'Electric'} data={Data.Home.Electric}/>
            <View style={{height:heightPixel(10)}}/>
          </View>
        </ScrollView>
        </View>
        <AppBottomBar choosed={0}/>
      </View>
    );
  }
}

export default Home;
