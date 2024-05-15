import React, { useEffect, useState } from 'react';
import { View, Alert, DeviceEventEmitter } from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import Permissions from 'react-native-permissions';
import { AppLoader, AppIcon, AppBTN, AppTopBar } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { addToOrders, removeCurrentCartOrder, reset } from "../../redux/slices/orderSlice";
import { styles } from "./style";

/**
 * Component for Picking location screen.
 */
export function PickLocation({ navigation, route: { params: { shipping, cart } } }) {

  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [marginBottom, setMarginBottom] = useState(0);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const orderSlice = useSelector(state => state.order);
  //Reducers
  const AddToOrders = (data) => { dispatch(addToOrders(data)); }
  const RemoveCurrentCartOrder = (data) => { dispatch(removeCurrentCartOrder(data)); }
  const ResetOrderSliceStatus = () => { dispatch(reset()); }

  const {
    latitude,
    longitude
  } = location;

  const {
    email
  } = userSlice.userState;

  const {
    orderAddState,
    removeCurrentCartOrderState,
    orderAddingLoading,
    removeCurrentCartOrderLoading
  } = orderSlice;


  useEffect(() => {
    if (removeCurrentCartOrderState) {
      Alert.alert("Your order is being processed!");
      ResetOrderSliceStatus();
      moveToNextScreen();
      return;
    }

    if (orderAddState) {
      RemoveCurrentCartOrder({ email });
      return;
    }
    onDidMount();
    return () => {
      onUnmount();
    }
  }, [orderAddState, removeCurrentCartOrderState]);

  function onDidMount() {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message: "<h2 style='color: #0af13e'>Use Location ?</h2>This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location<br/><br/><a href='#'>Learn more</a>",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
      showDialog: true, // false => Opens the Location access page directly
      openLocationServices: true, // false => Directly catch method is called if location services are turned off
      preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
      preventBackClick: true, // true => To prevent the location services popup from closing when it is clicked back button
      providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
    }).then(() => {
      _requestPermission();
    }).catch(() => {
      navigation.goBack();
    });
    DeviceEventEmitter.addListener('locationProviderStatusChange', (status) => { // only trigger when "providerListener" is enabled
    });
  }



  function _requestPermission() {
    Permissions.request('location').then(() => {
      Geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude, longitude: position.coords.longitude
          })
        },
        () => {
        },
        { timeout: 15000 }
      );
    });
  }

  async function onContinueClicked() {
    const currentOrderObj = getOrderObj();
    AddToOrders({ email, currentOrderObj });
  }

  function moveToNextScreen() {
    navigation.navigate('Home');
  }

  const getOrderObj = () => {
    const cartObj = cart;
    const shippingObj = shipping;
    return {
      shipping: shippingObj,
      id: randomNumberInRange(),
      totalPrice: getTotalPrice(cartObj),
      noOfItems: cartObj.length,
      status: 0,
      date: getTodayDate()
    };
  }

  const getTodayDate = () => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var date = new Date().getDate();
    var month = monthNames[new Date().getMonth() + 1];
    var year = new Date().getFullYear();
    return date + ' ' + month + ' ' + year;
  }

  const getTotalPrice = (cartObj) => {
    let returnedTotalVal = 0;
    cartObj.map((item) => {
      const { price, quantity } = item;
      returnedTotalVal += price * quantity;
    });
    return returnedTotalVal;
  }

  const randomNumberInRange = () => {
    return Math.floor(Math.random() * (10000 - 1 + 1)) + 1;
  }

  function onUnmount() {
    LocationServicesDialogBox.stopListener(); // Stop the "locationProviderStatusChange" listener
  }

  const {
    container,
    mapStyle,
    iconStyle,
    confirmBTN
  } = styles;

  if (latitude === null)
    return <AppLoader />
  return (
    <View style={container}>
      <AppTopBar title={'Pick Delivery Location'} />
      <MapView
        style={mapStyle}
        showsUserLocation
        onMapReady={() => setMarginBottom(1)}
        showsMyLocationButton
        showsCompass
        initialRegion={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        }}
      />
      <View style={iconStyle}>
        <AppIcon name={'map-marker'} color={GLOBAL.Color.c1} size={60} />
      </View>
      <AppBTN loading={orderAddingLoading || removeCurrentCartOrderLoading}
        text={'Confirm Location'} style={confirmBTN} onPress={() => onContinueClicked()} />
    </View>
  );

}