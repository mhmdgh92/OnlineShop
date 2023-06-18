import React, { useState, useEffect, useRef } from 'react';
import { View } from 'react-native';
import { AppBTN, AppText, LogoAndName } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { ForgetPassForm } from './Components/';
import { sendForgetPassAPI } from "../../redux/slices/forgetPassSlice";
import { forgetPassStyle } from './styles';

export default function ForgetPass({ navigation }) {

  //Refs
  const forgetFormRef = useRef(null);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const forgetPassSlice = useSelector(state => state.forgetPass);
  //ForgetPass Reducers
  const SendForgetPassAPI = (data) => { dispatch(sendForgetPassAPI(data)); }

  const [send, setSend] = useState(false);

  const {
    forgetPassState,
    forgetPassIsLoading
  } = forgetPassSlice;

  useEffect(() => {
    console.log(send + "," + forgetPassState)
    if (send && forgetPassState) {
      setSend(false);
      navigation.goBack();
    }
  }, [forgetPassState, send]);

  function onSendClicked() {
    forgetFormRef.current.onSendClicked();
  }

  const onSubmit = data => {
    console.log('onSubmit')
    SendForgetPassAPI(data);
    setSend(true);
  };

  return (
    <View style={forgetPassStyle.container}>
      <LogoAndName />
      <AppText marginTop={20} text="Forget password" size={26} />
      <AppText marginTop={2} text={"Enter your email to get \n an activation message"} size={14}
        color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
      <ForgetPassForm ref={forgetFormRef} onSubmit={onSubmit} />
      <AppBTN onPress={onSendClicked} text={'Send'} marginTop={45} loading={forgetPassIsLoading} />
    </View>
  );
}