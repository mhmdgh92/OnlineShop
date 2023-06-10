import React, { useState, useEffect } from 'react';
import { View, TextInput } from 'react-native';
import { AppTopBar, AppIcon, AppLoader, AppFlatList, AppText, AppBTN, AppBottomBar } from '../Common/';
const GLOBAL = require('../Common/Globals');
import CartItem from './Components/CartItem';
import { useSelector, useDispatch } from 'react-redux';
import { loadCartData, updateCart } from "../../redux/slices/cartSlice";
import { styles } from "./style";

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

  useEffect(() => {
    if (!onCartLoaded && userState) {
      setOnCartLoaded(true);
      LoadCartData({ email: userState.email });
      return;
    }
    if (onUpdateCart && cartHasUpdated) {
      setOnUpdateCart(false);
      props.navigation.navigate('Shipping', {
        cart: cartData
      });
    }
    else if (!cartIsEmpty()) {
      calculateTotal();
    }
    else if (cartState) {
      setCartData(cartState);
    }
  }, [cartState, cartData, cartHasUpdated]);

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

  const MyScrollableView = () => {

    if (!cartState || cartIsEmpty())
      return (
        <View style={myScrollableViewContainer}>
          <AppIcon name={'cart-off'} color={GLOBAL.Color.grey} size={170} />
          <AppText marginTop={10} text="Your cart is empty!" color={GLOBAL.Color.black} size={20} />
        </View>
      )


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

    <View style={mainContainer}>
      <AppTopBar title={'My Cart'} />
      {MyScrollableView()}
      <AppBottomBar choosed={3} />
    </View>
  );
}