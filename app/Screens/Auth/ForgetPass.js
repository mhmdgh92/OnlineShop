import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { AppText, LogoAndName } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { ForgetPassForm } from './Components/';
import { sendForgetPassAPI } from "../../redux/slices/forgetPassSlice";
import { forgetPassStyle } from './styles';

export default function ForgetPass(props) {

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
      props.navigation.goBack();
    }
  }, [forgetPassState, send]);

  const onSubmit = data => {
    console.log('onSubmit')
    const {
      email
    } = data;
    SendForgetPassAPI(email);
    setSend(true);
  };

  return (
    <View style={forgetPassStyle.container}>
      <LogoAndName />
      <AppText marginTop={20} text="Forget password" size={26} />
      <AppText marginTop={2} text={"Enter your email to get \n an activation message"} size={14}
        color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
      <ForgetPassForm loading={forgetPassIsLoading} onSubmitClicked={onSubmit} />
    </View>
  );
}