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
    Email
  } = userSlice.userState;

  useEffect(() => {
    if (onUpdateShippingInfo && shippingState) {
      setOnUpdateShippingInfo(false);
      moveToNextScreen();
      return;
    }
  }, [onUpdateShippingInfo]);

  function moveToNextScreen() {
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
    SendShippingInfo({ Email, shippingInfo });
  }

  return (
    <ScrollView>
      <View style={{ alignItems: 'center' }}>
        <AppTopBar title={'Shipping info'} />
        <AppTextInput marginTop={15} name={'account'} placeholder={'First name'}
          onEndEditing={(text) => addShippingInfo('FirstName', text)} />
        <AppTextInput marginTop={5} name={'account'} placeholder={'Last name'}
          onEndEditing={(text) => addShippingInfo('LastName', text)} />
        <AppTextInput marginTop={5} name={'cellphone'} placeholder={'Phone number'}
          onEndEditing={(text) => addShippingInfo('Phone', text)} />
        <AppTextInput marginTop={5} name={'email'} placeholder={'Email'}
          onEndEditing={(text) => addShippingInfo('Email', text)} />
        <AppTextInput marginTop={5} name={'map-marker'} placeholder={'Country'}
          onEndEditing={(text) => addShippingInfo('Country', text)} />
        <AppTextInput marginTop={5} name={'city'} placeholder={'City'}
          onEndEditing={(text) => addShippingInfo('City', text)} />
        <AppTextInput marginTop={5} name={'map'} placeholder={'Province'}
          onEndEditing={(text) => addShippingInfo('Province', text)} />
        <AppTextInput marginTop={5} name={'sign-direction'} placeholder={'Address - Street'}
          onEndEditing={(text) => addShippingInfo('Street', text)} />
        <AppTextInput marginTop={5} name={'home-city'} placeholder={'Neighbour'}
          onEndEditing={(text) => addShippingInfo('Neighbour', text)} />
        <AppTextInput marginTop={5} name={'home'} placeholder={'Building number'}
          onEndEditing={(text) => addShippingInfo('BuildingNumber', text)} />
        <View style={{ marginTop: heightPixel(5), width: widthPixel(320), flexDirection: 'row', justifyContent: 'space-between' }}>
          <AppTextInput iconFlex={3} width={155} name={'format-list-numbered'} placeholder={'Floor number'}
            onEndEditing={(text) => addShippingInfo('FloorNu', text)} />
          <AppTextInput iconFlex={3} width={155} name={'home'} placeholder={'Apartment no.'}
            onEndEditing={(text) => addShippingInfo('ApartmentNumber', text)} />
        </View>
        <AppBTN loading={shippingLoading} text={'Continue'} marginTop={32} onPress={() => onContinueClicked()} />
      </View>
    </ScrollView>
  );
}