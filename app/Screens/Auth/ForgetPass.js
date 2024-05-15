import React, { useState, useEffect, useRef } from 'react';
import { View, ScrollView } from 'react-native';
import { AppText, LogoAndName, AppBTN } from '../Common';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { ForgetPassForm } from './Components';
import { sendForgetPassAPI } from "../../redux/slices/forgetPassSlice";
import { forgetPassStyle } from "./styles";

/**
 * Component for user forget password.
 * 
 * @param {object} navigation - Navigation object for navigating between screens.
 */
export function ForgetPass({ navigation }) {

  // Refs
  const forgetPassFormRef = useRef(null);

  // State variables
  const [send, setSend] = useState(false);

  // Dispatch
  const dispatch = useDispatch();

  // Redux selectors
  const forgetPassSlice = useSelector(state => state.forgetPass);

  // // ForgetPass Reducers
  const SendForgetPassAPI = (data) => { dispatch(sendForgetPassAPI(data)); }

  const {
    forgetPassState,
    forgetPassIsLoading
  } = forgetPassSlice;

  useEffect(() => {
    console.log(send + ',' + forgetPassState);
    if (send && forgetPassState) {
      setSend(false);
      console.log('here');
      navigation.goBack();
    }

  }, [forgetPassState, send]);


  function onSubmitClicked() {
    forgetPassFormRef.current.onSubmit();
  }

  const onSubmit = data => {
    SendForgetPassAPI(data);
    setSend(true);
  };

  return (
    <ScrollView>
      <View style={forgetPassStyle.container}>
        <LogoAndName />
        <AppText marginTop={27} text="Forget password" size={24} />
        <AppText marginTop={3} text={"Enter your email to get \n an activation message"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <ForgetPassForm ref={forgetPassFormRef} onSubmit={onSubmit} />
        <AppBTN onPress={onSubmitClicked} text={'Send'} marginTop={45} loading={forgetPassIsLoading} />
      </View>
    </ScrollView>
  );
}