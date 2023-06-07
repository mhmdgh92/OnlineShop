import React, { useEffect, useState } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import { heightPixel, widthPixel } from '../Common/Utils/PixelNormalization';
import { AppTopBar, AppTextInput, AppBTN } from '../Common/';
import { useSelector, useDispatch } from 'react-redux';
import { sendShippingInfo } from "../../redux/slices/shippingSlice";

export default function Shipping(props) {

  const [shippingInfo, setShippingInfo] = useState({});
  const [onUpdateShippingInfo, setOnUpdateShippingInfo] = useState(false);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const shippingSlice = useSelector(state => state.shipping);
  const userSlice = useSelector(state => state.user);
  //Reducers
  const SendShippingInfo = (data) => { dispatch(sendShippingInfo(data)); }

  const {
    shippingState,
    shippingLoading,
  } = shippingSlice;

  const {
    email
  } = userSlice.userState;

  useEffect(() => {
    if (onUpdateShippingInfo && shippingState) {
      setOnUpdateShippingInfo(false);
      moveToNextScreen();
      return;
    }
  }, [onUpdateShippingInfo, shippingState]);

  function moveToNextScreen() {
    console.log('moveToNextScreen')
    props.navigation.navigate('PickLocation', {
      cart: props.route.params.cart,
      shipping: shippingInfo
    });
  }

  function addShippingInfo(feildName, newValue) {
    const { text } = newValue.nativeEvent;
    setShippingInfo(shippingInfo => ({
      ...shippingInfo,
      [feildName]: text
    }));
  }

  function onContinueClicked() {
    setOnUpdateShippingInfo(true);
    SendShippingInfo({ email, shippingInfo });
  }

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'Shipping info'} />
        <AppTextInput marginTop={15} name={'account'} placeholder={'First name'}
          onEndEditing={(text) => addShippingInfo('firstName', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'account'} placeholder={'Last name'}
          onEndEditing={(text) => addShippingInfo('lastName', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'cellphone'} placeholder={'phone number'}
          onEndEditing={(text) => addShippingInfo('phone', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'email'} placeholder={'Email'}
          onEndEditing={(text) => addShippingInfo('email', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'map-marker'} placeholder={'Country'}
          onEndEditing={(text) => addShippingInfo('Country', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'city'} placeholder={'City'}
          onEndEditing={(text) => addShippingInfo('City', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'map'} placeholder={'Province'}
          onEndEditing={(text) => addShippingInfo('Province', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'sign-direction'} placeholder={'Address - Street'}
          onEndEditing={(text) => addShippingInfo('Street', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'home-city'} placeholder={'Neighbour'}
          onEndEditing={(text) => addShippingInfo('Neighbour', text.nativeEvent.text)} />
        <AppTextInput marginTop={5} name={'home'} placeholder={'Building number'}
          onEndEditing={(text) => addShippingInfo('BuildingNumber', text.nativeEvent.text)} />
        <View style={{ marginTop: heightPixel(5), width: widthPixel(320), flexDirection: 'row', justifyContent: 'space-between' }}>
          <AppTextInput iconFlex={3} width={155} name={'format-list-numbered'} placeholder={'Floor number'}
            onEndEditing={(text) => addShippingInfo('FloorNu', text.nativeEvent.text)} />
          <AppTextInput iconFlex={3} width={155} name={'home'} placeholder={'Apartment no.'}
            onEndEditing={(text) => addShippingInfo('ApartmentNumber', text.nativeEvent.text)} />
        </View>
        <AppBTN loading={shippingLoading} text={'Continue'} marginTop={32} onPress={() => onContinueClicked()} />
      </View>
    </ScrollView>
  );
}