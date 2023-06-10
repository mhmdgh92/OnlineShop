import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppText, AppPicker, AppBTN, AppQuantity } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { Photos, SaleBadge, LoveAndShare, Details } from './Components/';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from "../../redux/slices/cartSlice";

export default function ProductDetails(props) {

  // quantity: 1,
  // addToCartLoading: false,
  const [quantity, setQuantity] = useState(1);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const cartSlice = useSelector(state => state.cart);
  //productDetails Reducers
  const AddToCart = (data) => { dispatch(addToCart(data)); }

  const {
    userState
  } = userSlice;

  const {
    data
  } = props.route.params;

  const {
    id,
    name,
    link,
    price,
    oldPrice
  } = data;

  const {
    cartAddLoading
  } = cartSlice;

  const getCartItemObj = () => {
    return { id: id, name: name, link: link[0], price: price, quantity: quantity }
  }

  function AddToCartClicked() {
    let data = { email: userState.email, cartItemObj: getCartItemObj() }
    AddToCart(data);
  }

  function onCheckOutClicked() {
    props.navigation.navigate('Cart');
  }

  function onUpdateQuantity(num) {
    setQuantity(num);
  }

  const getDiscount = () => {
    return ((oldPrice / price) * 10).toFixed(0) + '%';
  }

  return (
    <View style={{ height: '100%', width: '100%' }}>
      <View style={{ height: '9%', width: '100%' }}><AppTopBar title={data.name} /></View>
      <View style={{ height: '92%', width: '100%' }}>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Photos images={data.link} />
            <SaleBadge discount={getDiscount()} />
            <LoveAndShare />
            <Details data={data} />
            <AppText style={{ marginTop: heightPixel(13), justifyContent: 'center', backgroundColor: GLOBAL.Color.borderColor, width: '95%', height: heightPixel(45) }}
              color={GLOBAL.Color.darkGrey} text={'Shipping free'} />
            <AppPicker items={['Small', 'Medium', 'Large']} style={{ width: '95%', marginTop: heightPixel(15), backgroundColor: GLOBAL.Color.borderColor }} />
            <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: heightPixel(15), alignItems: 'center', width: '95%', height: heightPixel(40) }}>
              <AppBTN textSize={14} loading={cartAddLoading} onPress={() => AddToCartClicked()} width={'60%'} height={'100%'} text={'Add to cart'} borderRadius={8} />
              <View style={{ width: '2%' }} />
              <AppQuantity updateQuantity={(val) => onUpdateQuantity(val)} />
            </View>
          </View>
          <AppText color={GLOBAL.Color.c1} text={'Details'} size={15} marginTop={30} style={{ width: '92%', alignSelf: 'center', alignItems: 'flex-start' }} />
          <AppText textAlign={'left'} text={data.desc} marginTop={15} size={13} style={{ width: '92%', alignSelf: 'center', alignItems: 'flex-start' }} />
          <View style={{ height: heightPixel(120) }} />
        </ScrollView>
        <AppBTN onPress={() => onCheckOutClicked()} text={'CheckOut'} style={{ position: 'absolute', bottom: heightPixel(30) }} />
      </View>
    </View>
  );
}