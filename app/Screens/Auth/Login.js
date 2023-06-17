import React, { useState, useEffect, useRef } from 'react';
import { TouchableOpacity, View, ScrollView } from 'react-native';
import { AppText, LogoAndName, AppBTN, AppLoader } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { LoginForm } from './Components/';
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser, saveUser } from "../../redux/slices/userSlice";
import { loginAPI, getUserFireStoreAPI } from "../../redux/slices/loginSlice";
import { loginStyle } from "./styles";

export default function Login(props) {

  //Refs
  const loginFormRef = useRef(null);

  const [initializing, setInitializing] = useState(true);
  const [status, setStatus] = useState(0);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const loginSlice = useSelector(state => state.login);
  //User Reducers
  const LoadUser = () => { dispatch(loadUser()); }
  const SaveUser = (data) => { dispatch(saveUser(data)); }
  //Login Reducers
  const LoginAPI = (data) => { dispatch(loginAPI(data)); }
  const GetUserFireStoreAPI = (data) => { dispatch(getUserFireStoreAPI(data)); }

  const {
    userState,
    userIsLoading
  } = userSlice;

  const {
    loginState,
    loginIsSuccess,
    loginGetDataSuccess,
    loginIsLoading
  } = loginSlice;

  useEffect(() => {
    if (userState) {
      moveToNextScreen();
      return;
    }
    if (loginGetDataSuccess) {
      SaveUser(loginState);
      return;
    }
    if (loginIsSuccess) {
      GetUserFireStoreAPI(loginState.email);
      return;
    }
    if (status == 0) {
      auth().onAuthStateChanged(onAuthStateChanged);
      callLoadUserData();
      return;
    }
  }, [status, loginIsSuccess, loginGetDataSuccess, userState]);

  function onAuthStateChanged() {
    if (initializing) setInitializing(false);
  }

  async function callLoadUserData() {
    await LoadUser();
    setStatus(1);
  }

  function moveToNextScreen() {
    props.navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],//T,Home
    });
  }

  function onForgotpasswordClick() {
    props.navigation.navigate('ForgetPass');
  }

  function onSkipClick() {
    moveToNextScreen();
  }

  function onSignUpClick() {
    props.navigation.navigate('Register');
  }

  if (initializing || userIsLoading)
    return <AppLoader />

  function onLoginClicked() {
    loginFormRef.current.onLoginClicked();
  }

  const onSubmit = data => {
    console.log('onSubmit');
    LoginAPI(data);
  };

  return (
    <ScrollView>
      <View style={loginStyle.container}>
        <LogoAndName />
        <AppText marginTop={27} text="Welcome back" size={24} />
        <AppText marginTop={3} text={"Login"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <LoginForm ref={loginFormRef} onForgotpasswordClick={onForgotpasswordClick} onSubmit={onSubmit} />
        <AppBTN testID="loginBTN" onPress={onLoginClicked} text={'Login'} marginTop={45} loading={loginIsLoading} />
        <AppBTN onPress={onSkipClick} text={'Skip'} color={GLOBAL.Color.c3} marginTop={15} />
        <View style={loginStyle.middleView}>
          <AppText text={"Don’t have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignUpClick}><AppText text={" Sign up"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}