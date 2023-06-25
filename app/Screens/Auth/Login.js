import React, { useState, useEffect, useRef } from 'react';
import { Alert, TouchableOpacity, View, ScrollView } from 'react-native';
import { AppText, LogoAndName, AppBTN, AppLoader, AppImage } from '../Common/';
const GLOBAL = require('../Common/Globals');
import { LoginForm } from './Components/';
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser, saveUser } from "../../redux/slices/userSlice";
import { loginAPI, googleSignIn, facebookSignIn, getUserFireStoreAPI } from "../../redux/slices/loginSlice";
import { loginStyle } from "./styles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import Config from "react-native-config";

/**
 * Component for user login.
 * 
 * @param {object} navigation - Navigation object for navigating between screens.
 */
export function Login({ navigation }) {

  // Refs
  const loginFormRef = useRef(null);

  // State variables
  const [initializing, setInitializing] = useState(true);
  const [status, setStatus] = useState(0);

  // Dispatch
  const dispatch = useDispatch();

  // Redux selectors
  const userSlice = useSelector(state => state.user);
  const loginSlice = useSelector(state => state.login);

  // User Reducers
  const LoadUser = () => { dispatch(loadUser()); }
  const SaveUser = (data) => { dispatch(saveUser(data)); }

  // Login Reducers
  const LoginAPI = (data) => { dispatch(loginAPI(data)); }
  const GoogleSignIn = (data) => { dispatch(googleSignIn(data)); }
  const FacebookSignIn = (data) => { dispatch(facebookSignIn(data)); }
  const GetUserFireStoreAPI = (data) => { dispatch(getUserFireStoreAPI(data)); }

  // Env
  const {
    FIREBASE_AUTH_GOOGLE_CLIENT_ID
  } = Config;

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
    // Check if user is already logged in
    if (userState) {
      moveToNextScreen();
      return;
    }

    // Check if login data is successfully retrieved
    if (loginGetDataSuccess && loginState !== null) {
      console.log('Here 2')
      SaveUser(loginState);
      return;
    }

    // Check if login is successful
    if (loginIsSuccess && loginState !== null) {
      console.log('Here 3')
      GetUserFireStoreAPI(loginState.email);
      return;
    }

    // Check the status and perform actions accordingly
    if (status == 0) {
      setConfigs();
      callLoadUserData();
      return;
    }
  }, [status, loginIsSuccess, loginGetDataSuccess, userState]);

  function setConfigs() {
    //Set Google configs
    GoogleSignin.configure({
      webClientId: FIREBASE_AUTH_GOOGLE_CLIENT_ID
    });
    //Set FireBase configs
    auth().onAuthStateChanged(onAuthStateChanged);
  }

  function onAuthStateChanged() {
    if (initializing) setInitializing(false);
  }

  async function callLoadUserData() {
    await LoadUser();
    setStatus(1);
  }

  function moveToNextScreen() {
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],
    });
  }


  function onForgotpasswordClick() {
    navigation.navigate('ForgetPass');
  }

  function onSkipClick() {
    moveToNextScreen();
  }

  function onSignUpClick() {
    navigation.navigate('Register');
  }

  // If the user or login data is loading, display the loader
  if (initializing || userIsLoading)
    return <AppLoader />

  function onLoginClicked() {
    loginFormRef.current.onLoginClicked();
  }

  async function onGoogleClicked() {
    console.log('onGoogleClicked:')
    var signData = await onGoogleButtonPress();
    console.log('Login success')
    GoogleSignIn(signData);
  }

  async function onFacebookClicked() {
    console.log('onFaceBookClicked:')
    var signData = await onFacebookButtonPress();
    console.log('Login success')
    FacebookSignIn(signData);
  }

  async function onGoogleButtonPress() {
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
    // Revoke access if there is any
    try { await GoogleSignin.revokeAccess(); } catch { }
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = await auth.GoogleAuthProvider.credential(idToken);
    // console.log('googleCredential:' + JSON.stringify(googleCredential))
    return googleCredential;
  }


  async function onFacebookButtonPress() {
    Alert.alert('Under development!')
    return;
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);
    if (result.isCancelled)
      throw 'User cancelled the login process';
    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();
    if (!data)
      throw 'Something went wrong obtaining access token';
    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);
    // Sign-in the user with the credential
    return facebookCredential;
  }

  const onSubmit = data => {
    LoginAPI(data);
  };

  const {
    container,
    middleView,
    socialView
  } = loginStyle;

  return (
    <ScrollView>
      <View style={container}>
        <LogoAndName />
        <AppText marginTop={27} text="Welcome back" size={24} />
        <AppText marginTop={3} text={"Login"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <LoginForm ref={loginFormRef} onForgotpasswordClick={onForgotpasswordClick} onSubmit={onSubmit} />
        <AppBTN onPress={onLoginClicked} text={'Login'} marginTop={45} loading={loginIsLoading} />
        <AppBTN onPress={onSkipClick} text={'Skip'} color={GLOBAL.Color.c3} marginTop={15} />
        <View style={middleView}>
          <AppText text={"Don’t have account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignUpClick}><AppText text={" Sign up"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>
        <View style={socialView}>
          <TouchableOpacity onPress={onFacebookClicked}><AppImage source={require('../../Assets/facebook.png')} width={35} /></TouchableOpacity>
          <TouchableOpacity onPress={onGoogleClicked}><AppImage source={require('../../Assets/google.png')} width={35} /></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}