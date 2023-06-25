import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { AppTopBar, AppIcon, AppLoader, AppFlatList, AppText, AppBTN } from '../Common/';
const GLOBAL = require('../Common/Globals');
import {CartItem} from './Components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartData, updateCart } from "../../redux/slices/cartSlice";
import { styles } from "./style";
import { useFocusEffect } from '@react-navigation/native';

/**
 * Component for the Cart screen.
 */
export function Cart({ navigation }) {

  // quantity: 1,
  // addToCartLoading: false,
  const [shipping, setShipping] = useState(10);
  const [cartData, setCartData] = useState(null);
  const [subTotal, setSubTotal] = useState(0);
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

  const {
    mainContainer,
    billItemStyle,
    myScrollableViewContainer,
    container,
    innerContainer,
    flatListStyle,
    promoCodeStyle,
    promoCodeTextStyle,
    billsContainer
  } = styles;

  useFocusEffect(
    React.useCallback(() => {
      if (!userState) {
        navigation.goBack();
        return;
      }
      setOnCartLoaded(false);
      setCartData(null);
      LoadCartData({ email: userState.email });
    }, [])
  );

  useEffect(() => {
    if (!userState)
      return;
    if (!onCartLoaded && userState) {
      setOnCartLoaded(true);
      LoadCartData({ email: userState.email });
      return;
    }
    if (onUpdateCart && cartHasUpdated) {
      setOnUpdateCart(false);
      navigation.navigate('Shipping', {
        cart: cartData
      });
      return;
    }
    if (cartState && !cartData) {
      updateSubTotal(cartState);
      setCartData(cartState);
    }
  }, [cartState, cartData, cartHasUpdated]);

  function updateSubTotal(updatedCartData) {
    try {
      if (cartIsEmpty(updatedCartData))
        return;
      let subTotal = 0;
      updatedCartData.map((item) => {
        const curItemQuantitiy = Number(item.quantity);
        const curItemPrice = Number(item.price);
        subTotal += Number(curItemQuantitiy * curItemPrice);
      });
      setSubTotal(subTotal);
    } catch (error) {
      return 0;
    }
  }

  const cartIsEmpty = (thisCartData = cartData) => {
    return !thisCartData || thisCartData.length == 0;
  }

  const billItem = (name, price) => {
    return (
      <View style={billItemStyle}>
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

  function onPlusOrMinusQuantity(itemID, plusOrMinus) {
    const tempCartData = JSON.parse(JSON.stringify(cartData));
    if (plusOrMinus)
      tempCartData[itemID].quantity++;
    else
      tempCartData[itemID].quantity--;
    updateSubTotal(tempCartData);
    setCartData(tempCartData);
  }

  const MyScrollableView = () => {

    if (!cartState || cartIsEmpty())
      return (
        <View style={myScrollableViewContainer}>
          <AppIcon name={'cart-off'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="Your cart is empty!" color={GLOBAL.Color.black} size={20} />
        </View>
      )

    if (!userState)
      return (<View />)
    return (
      <View style={container}>
        <View style={innerContainer}>
          <View style={flatListStyle}>
            <AppFlatList numColumns={1} data={cartData}
              renderItem={({ id, item }) => <CartItem key={id} item={item} onPlusOrMinusQuantity={onPlusOrMinusQuantity} />} />
          </View>
          <View style={promoCodeStyle}>
            <TextInput editable={false} placeholder={'\tPromo Code'} style={promoCodeTextStyle} />
            <AppBTN text={'Apply'} textSize={17} height={'100%'} width={'35%'} />
          </View>
          <View style={billsContainer}>
            {billItem('Sub Total', '$' + subTotal)}
            {billItem('Shipping', '$' + shipping)}
            {billItem('Total', '$' + Number(subTotal + shipping))}
          </View>
          <AppBTN loading={updateCartLoading} marginTop={22} text={'Finalize Order'} onPress={() => onFinalizeClicked()} />
        </View>
      </View>
    );
  }

  if (cartIsLoading)
    return <AppLoader />

  return (
    <View style={mainContainer}>
      <AppTopBar title={'My Cart'} />
      {MyScrollableView()}
    </View>
  );
}