import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import { AppTopBar, AppTextInput, AppBTN } from '../Common/';
import { useSelector, useDispatch } from 'react-redux';
import { sendShippingInfo } from "../../redux/slices/shippingSlice";
import { styles } from './style';

export function Shipping({ navigation, route: { params: { cart } } }) {

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

  const {
    container,
    bottomInputs
  } = styles;

  useEffect(() => {
    if (onUpdateShippingInfo && shippingState) {
      setOnUpdateShippingInfo(false);
      moveToNextScreen();
      return;
    }
  }, [onUpdateShippingInfo, shippingState]);

  function moveToNextScreen() {
    navigation.navigate('PickLocation', {
      cart: cart,
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
      <View style={container}>
        <AppTopBar title={'Shipping info'} />
        <AppTextInput marginTop={15} name={'account'} placeholder={'First name'}
          onEndEditing={(text) => addShippingInfo('firstName', text)} />
        <AppTextInput marginTop={5} name={'account'} placeholder={'Last name'}
          onEndEditing={(text) => addShippingInfo('lastName', text)} />
        <AppTextInput marginTop={5} name={'cellphone'} placeholder={'phone number'}
          onEndEditing={(text) => addShippingInfo('phone', text)} />
        <AppTextInput marginTop={5} name={'email'} placeholder={'Email'}
          onEndEditing={(text) => addShippingInfo('email', text)} />
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
        <View style={bottomInputs}>
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