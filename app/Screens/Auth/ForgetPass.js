import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
const ScreenHeight = Dimensions.get('window').height;
const ScreenWidth = Dimensions.get('window').width;
import { AppText, LogoAndName } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { ForgetPassForm } from './Components/';
import { sendForgetPassAPI } from "../../redux/slices/forgetPassSlice";

export default function ForgetPass(props) {

  //Dispatch
  const dispatch = useDispatch();
  //States
  const forgetPassSlice = useSelector(state => state.forgetPass);
  //ForgetPass Reducers
  const SendForgetPassAPI = (data) => { dispatch(sendForgetPassAPI(data)); }

  const {
    forgetPassState,
    forgetPassIsLoading
  } = forgetPassSlice;

  useEffect(() => {
    if (forgetPassState)
      props.navigation.goBack();
  }, [forgetPassState]);

  const onSubmit = data => {
    const {
      Email
    } = data;
    SendForgetPassAPI(Email);
  };

  return (
    <View style={{ alignItems: 'center', height: ScreenHeight * 0.95, width: ScreenWidth }}>
      <LogoAndName />
      <AppText marginTop={20} text="Forget password" size={26} />
      <AppText marginTop={2} text={"Enter your Email to get \n an activation message"} size={14}
        color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
      <ForgetPassForm loading={forgetPassIsLoading} onSubmitClicked={onSubmit} />
    </View>
  );
}