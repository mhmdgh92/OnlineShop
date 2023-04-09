import React, {Component,useState} from 'react';
import {View,TextInput,ScrollView,Dimensions} from 'react-native';
const {width: ScreenWidth,height: ScreenHeight,} = Dimensions.get('window');
import {fontPixel,heightPixel,widthPixel,normalize} from '../Common/Utils/PixelNormalization';
import {AppTopBar,AppFlatList,AppText,AppTextInput,AppBTN,AppBottomBar} from '../Common/';
const GLOBAL = require('../Common/Globals');
import CartItem from './Components/CartItem';
import Data from '../MockData/data';

class Cart extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      subTotal:0,
      shipping:10
    }
  }

  componentDidMount(){
    console.log(this.state);
    this.calculateTotal();
  }

  calculateTotal(){
    let subTotal=0;
    Data.Cart.map((item,id) => {
          const curItemQuantitiy=Number(item.quantity);
          const curItemPrice=Number(item.price);
          const total = Number(curItemQuantitiy*curItemPrice);
          subTotal += Number(curItemQuantitiy*curItemPrice);
        });
      this.setState({subTotal:subTotal});
  }

billItem = (name,price,withoutBottomBorder) => {
return (
  <View style={{justifyContent:'space-between',borderBottomWidth:withoutBottomBorder?0:1,borderBottomColor:GLOBAL.Color.borderColor,height:'33%',width:'90%',flexDirection:'row'}}>
    <AppText text={name}/>
    <AppText text={price}/>
  </View>
)
}

onFinalizeClicked (){
  this.props.navigation.navigate('Shipping');
}

updateQuantity=(itemID,newQuantity,plusOrMinus)=>{
  const{
    subTotal
  } = this.state;
  if(plusOrMinus)
    this.setState({subTotal:subTotal+(Data.Cart[itemID].price)})
  else
    this.setState({subTotal:subTotal-(Data.Cart[itemID].price)})
}

  MyScrollableView = () => {
    const{
      subTotal,
      shipping
    } = this.state;
    return (
        <View style={{width:'100%',height:'100%'}}>
          <View style={{width:ScreenWidth,height:ScreenHeight*.88,alignItems:'center'}}>
            <View style={{width:'100%',height:heightPixel(330)}}>
              <AppFlatList numColumns={1} data={Data.Cart} renderItem={({item})=> <CartItem item={item} onUpdateQuantity={this.updateQuantity}/>}/>
            </View>
            <View style={{alignItems:'center',flexDirection:'row',marginTop:heightPixel(30),width:'85%',height:'7%',borderRadius:normalize(30),backgroundColor:'white'}}>
              <TextInput placeholder={'\tPromo Code'} style={{width:'65%'}}/>
              <AppBTN text={'Apply'} textSize={17} height={'100%'} width={'35%'}/>
            </View>
            <View style={{alignItems:'center',marginTop:heightPixel(25),width:'85%',height:'16%',borderRadius:normalize(15),backgroundColor:'white'}}>
              {this.billItem('Sub Total','$'+subTotal)}
              {this.billItem('Shipping','$'+shipping)}
              {this.billItem('Total','$'+Number(subTotal+shipping),true)}
            </View>
            <AppBTN marginTop={22} text={'Finalize Order'} onPress={()=>this.onFinalizeClicked()}/>
          </View>
        </View>
    );
  }

  render() {
    return (
      <View style={{height:'100%',width:'100%'}}>
        <AppTopBar title={'My Cart'}/>
        {this.MyScrollableView()}
        <AppBottomBar choosed={3}/>
      </View>
    );
  }
}
export default Cart;
