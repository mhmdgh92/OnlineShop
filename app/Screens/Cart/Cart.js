import React, { useState, useEffect } from 'react';
import { View, TextInput, Dimensions } from 'react-native';
const { width: ScreenWidth, height: ScreenHeight, } = Dimensions.get('window');
import { heightPixel, normalize } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppIcon, AppLoader, AppFlatList, AppText, AppBTN, AppBottomBar } from '../Common/';
const GLOBAL = require('../Common/Globals');
import CartItem from './Components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartData, updateCart } from "../../redux/slices/cartSlice";

export default function Cart(props) {

  // quantity: 1,
  // addToCartLoading: false,
  const [shipping, setShipping] = useState(10);
  const [subTotal, setSubTotal] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [onUpdateCart, setOnUpdateCart] = useState(false);
  const [onCartLoaded, setOnCartLoaded] = useState(false);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const cartSlice = useSelector(state => state.cart);
  //Reducers
  const LoadCartData = (data) => { dispatch(loadCartData(data)); }
  const UpdateCart = (data) => { dispatch(updateCart(data)); }

  const {
    userState
  } = userSlice;

  const {
    cartState,
    cartIsLoading,
    updateCartLoading,
    cartHasUpdated
  } = cartSlice;

  useEffect(() => {
    if (!onCartLoaded && userState) {
      console.log('1')
      setOnCartLoaded(true);
      LoadCartData({ email: userState.email });
      return;
    }
    if (onUpdateCart && cartHasUpdated) {
      console.log('4')
      setOnUpdateCart(false);
      props.navigation.navigate('Shipping', {
        cart: cartData
      });
    }
    else if (!cartIsEmpty()) {
      console.log('3')
      calculateTotal();
    }
    else if (cartState) {
      console.log('2')
      console.log('cartState:' + JSON.stringify(cartState))
      setCartData(cartState);
    }

  }, [cartState, cartData, cartHasUpdated]);

  function onUnmount() {
    console.log('onUnmount')
  }

  function setCartStatus() {

  }

  function calculateTotal() {
    if (cartIsEmpty())
      return;
    let subTotal = 0;
    cartData.map((item) => {
      const curItemQuantitiy = Number(item.quantity);
      const curItemPrice = Number(item.price);
      subTotal += Number(curItemQuantitiy * curItemPrice);
    });
    setSubTotal(subTotal);
  }

  const cartIsEmpty = () => {
    return cartData.length == 0;
  }

  const billItem = (name, price, withoutBottomBorder) => {
    return (
      <View style={{
        justifyContent: 'space-between', borderBottomWidth: withoutBottomBorder ? 0 : 1,
        borderBottomColor: GLOBAL.Color.borderColor, height: '33%', width: '90%', flexDirection: 'row'
      }}>
        <AppText text={name} />
        <AppText text={price} />
      </View>
    )
  }

  function onFinalizeClicked() {
    const data = { email: userState.email, updatedCart: cartData }
    setOnUpdateCart(true);
    UpdateCart(data);
  }

  onPlusOrMinusQuantity = (itemID, plusOrMinus) => {
    const tempCartData = JSON.parse(JSON.stringify(cartData));
    if (plusOrMinus) {
      tempCartData[itemID].quantity++;
      setSubTotal(subTotal + (cartData[itemID].price));
    }
    else {
      tempCartData[itemID].quantity--;
      setSubTotal(subTotal - (cartData[itemID].price));
    }
    setCartData(tempCartData);
  }

  MyScrollableView = () => {

    if (!cartState || cartIsEmpty())
      return (
        <View style={{ justifyContent: 'center', alignItems: 'center', height: '80%', width: '100%' }}>
          <AppIcon name={'cart-off'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="Your cart is empty!" color={GLOBAL.Color.black} size={20} />
        </View>
      )


    return (
      <View style={{ width: '100%', height: '100%' }}>
        <View style={{ width: ScreenWidth, height: ScreenHeight * .88, alignItems: 'center' }}>
          <View style={{ width: '100%', height: heightPixel(330) }}>
            <AppFlatList numColumns={1} data={cartData}
              renderItem={({ id, item }) => <CartItem key={id} item={item} onPlusOrMinusQuantity={onPlusOrMinusQuantity} />} />
          </View>
          <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: heightPixel(30), width: '85%', height: '7%', borderRadius: normalize(30), backgroundColor: 'white' }}>
            <TextInput editable={false} placeholder={'\tPromo Code'} style={{ width: '65%' }} />
            <AppBTN text={'Apply'} textSize={17} height={'100%'} width={'35%'} />
          </View>
          <View style={{ alignItems: 'center', marginTop: heightPixel(25), width: '85%', height: '16%', borderRadius: normalize(15), backgroundColor: 'white' }}>
            {billItem('Sub Total', '$' + subTotal)}
            {billItem('Shipping', '$' + shipping)}
            {billItem('Total', '$' + Number(subTotal + shipping), true)}
          </View>
          <AppBTN loading={updateCartLoading} marginTop={22} text={'Finalize Order'} onPress={() => onFinalizeClicked()} />
        </View>
      </View>
    );
  }

  if (cartIsLoading)
    return <AppLoader />

  return (

    <View style={{ height: '100%', width: '100%' }}>
      <AppTopBar title={'My Cart'} />
      {MyScrollableView()}
      <AppBottomBar choosed={3} />
    </View>
  );
}