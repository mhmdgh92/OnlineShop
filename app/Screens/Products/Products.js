import React, {Component} from 'react';
import {View,FlatList} from 'react-native';
import {fontPixel,heightPixel,widthPixel} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppText,AppProductItem} from '../Common/';
import Data from '../MockData/data';
var products = null;
var secitionName='Products';
var sectionID=null;
var subSectionsID=null;

class Products extends React.Component{

  noProducts = () => {
  return (
    <View style={{justifyContent:'center',alignItems:'center',height:'75%',width:'100%'}}>
      <AppText text={'No Products'} size={18}/>
    </View>
  )
  }


  getData(){
    products=null;
    if(!this.props.route ||!this.props.route.params)
      return;
    const{
      sectionID,
      subSectionsID
    } = this.props.route.params;
    if(sectionID>=Data.Products.length)
      return;
    if(subSectionsID>=Data.Products[sectionID].length)
      return;
    products = Data.Products[sectionID][subSectionsID];
    secitionName = this.props.route.params.secitionName;
  }

  render() {
    this.getData();
    return (
      <View style={{alignItems:'center'}}>
        <AppTopBar title={secitionName}/>
        <View style={{height:'100%',width:'95%'}}>
          {products?
          <AppFlatList style={{width:'100%'}} numColumns={2} data={products}
          renderItem={({item})=> <AppProductItem height={heightPixel(300)} item={item}/>}/>
          :
            this.noProducts()}
          <View style={{height:'16%'}}/>
        </View>
      </View>
    );
  }
}

export default Products;
