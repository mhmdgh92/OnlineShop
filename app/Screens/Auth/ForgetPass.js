import React, { useEffect } from 'react';
import { View } from 'react-native';
import { AppText, LogoAndName } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { ForgetPassForm } from './Components/';
import { sendForgetPassAPI } from "../../redux/slices/forgetPassSlice";
import { styles } from './forgetPassStlye';

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
      email
    } = data;
    SendForgetPassAPI(email);
  };

  return (
    <View style={styles.container}>
      <LogoAndName />
      <AppText marginTop={20} text="Forget password" size={26} />
      <AppText marginTop={2} text={"Enter your email to get \n an activation message"} size={14}
        color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
      <ForgetPassForm loading={forgetPassIsLoading} onSubmitClicked={onSubmit} />
    </View>
  );
}