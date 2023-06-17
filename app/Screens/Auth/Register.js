import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import { AppBTN, AppText, LogoAndName } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { useSelector, useDispatch } from 'react-redux';
import { RegisterForm } from './Components/';
import { saveUser } from "../../redux/slices/userSlice";
import { registerAPI, setUserFireStoreAPI } from "../../redux/slices/registerSlice";
import { registerStyle } from "./styles";

export default function Register(props) {

  //Refs
  const registerFormRef = useRef(null);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const registerSlice = useSelector(state => state.register);
  //User Reducers
  const SaveUser = (data) => { dispatch(saveUser(data)); }
  //Register Reducers
  const RegisterAPI = (data) => { dispatch(registerAPI(data)); }
  const SetUserFireStoreAPI = (data) => { dispatch(setUserFireStoreAPI(data)); }

  const {
    userState
  } = userSlice;

  const {
    registerState,
    registerIsLoading,
    registerSetDataSuccess,
    registerIsSuccess
  } = registerSlice;

  useEffect(() => {
    if (userState) {
      moveToNextScreen();
      return;
    }

    if (registerSetDataSuccess) {
      SaveUser(registerState);
      return;
    }

    if (registerIsSuccess) {
      SetUserFireStoreAPI(registerState);
      return;
    }

  }, [userState, registerIsSuccess, registerSetDataSuccess]);

  function moveToNextScreen() {
    //Status 4
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],
    });
  }

  function onPrivacyClick() {
    props.navigation.navigate('Privacy');
  }

  function onTermsClick() {
    props.navigation.navigate('Terms');
  }

  function onSignInClick() {
    props.navigation.navigate('Login');
  }

  function onRegisterClicked() {
    registerFormRef.current.onRegisterClicked();
  }

  const onSubmit = data => {
    console.log('onRegister');
    RegisterAPI(data);
  };

  return (
    <ScrollView>
      <View style={registerStyle.container}>
        <LogoAndName />
        <AppText marginTop={20} text="New account" size={26} />
        <AppText marginTop={2} text={"Register"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <RegisterForm ref={registerFormRef} onPrivacyClick={onPrivacyClick} onTermsClick={onTermsClick} loading={registerIsLoading} onSubmit={onSubmit} />
        <AppBTN onPress={onRegisterClicked} text={'Register'} marginTop={45} />
        <View style={registerStyle.middleView}>
          <AppText text={"Have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignInClick}><AppText text={" Sign in"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}