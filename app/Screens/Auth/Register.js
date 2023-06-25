import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, View, ScrollView, Alert } from 'react-native';
import { AppBTN, AppImage, AppText, LogoAndName } from '../Common/';
const GLOBAL = require('../Common/Globals');
import auth from '@react-native-firebase/auth';
import { useSelector, useDispatch } from 'react-redux';
import { RegisterForm } from './Components/';
import { saveUser } from "../../redux/slices/userSlice";
import { registerAPI, googleRegister, facebookRegister, setUserFireStoreAPI } from "../../redux/slices/registerSlice";
import { registerStyle } from "./styles";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { LoginManager, AccessToken } from 'react-native-fbsdk-next';
import { heightPixel } from '../Common/Utils/PixelNormalization';

/**
 * Component for the registration screen.
 */
export function Register({ navigation }) {

  // Refs
  const registerFormRef = useRef(null);

  // Dispatch
  const dispatch = useDispatch();

  // States
  const userSlice = useSelector(state => state.user);
  const registerSlice = useSelector(state => state.register);

  // User Reducers
  const SaveUser = (data) => { dispatch(saveUser(data)); }

  // Register Reducers
  const RegisterAPI = (data) => { dispatch(registerAPI(data)); }
  const GoogleRegister = (data) => { dispatch(googleRegister(data)); }
  const FacebookRegister = (data) => { dispatch(facebookRegister(data)); }
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

    if (registerSetDataSuccess && registerState !== null) {
      SaveUser(registerState);
      return;
    }

    if (registerIsSuccess && registerState !== null) {
      SetUserFireStoreAPI(registerState);
      return;
    }
  }, [userState, registerIsSuccess, registerSetDataSuccess]);


  function moveToNextScreen() {
    // Reset the navigation stack and go to the home screen
    navigation.reset({
      index: 0,
      routes: [{ name: 'HomeStack' }],
    });
  }

  function onPrivacyClick() {
    // Navigate to the privacy screen
    navigation.navigate('Privacy');
  }

  function onTermsClick() {
    // Navigate to the terms screen
    navigation.navigate('Terms');
  }

  function onSignInClick() {
    // Navigate to the login screen
    navigation.navigate('Login');
  }

  function onRegisterClicked() {
    // Call the register form's register function
    registerFormRef.current.onRegisterClicked();
  }

  async function onGoogleClicked() {
    var registerData = await onGoogleButtonPress();
    GoogleRegister(registerData);
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

  async function onFacebookClicked() {
    Alert.alert('Under development!')
    return;
    var registerData = await onFacebookClicked();
    FacebookRegister(registerData);
  }

  async function onFacebookButtonPress() {
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
    // Call the register API
    RegisterAPI(data);
  };

  const {
    container,
    middleView,
    socialView
  } = registerStyle;

  return (
    <ScrollView>
      <View style={container}>
        <LogoAndName />
        <AppText marginTop={20} text="New account" size={26} />
        <AppText marginTop={2} text={"Register"} size={14} color={GLOBAL.Color.darkGrey} fontFamily={'Montserrat-SemiBold'} />
        <RegisterForm ref={registerFormRef} onPrivacyClick={onPrivacyClick} onTermsClick={onTermsClick} onSubmit={onSubmit} />
        <AppBTN loading={registerIsLoading} onPress={onRegisterClicked} text={'Register'} marginTop={45} />
        <View style={middleView}>
          <AppText text={"Have an account?"} color={GLOBAL.Color.darkGrey} size={16} fontFamily={'Montserrat-Bold'} />
          <TouchableOpacity onPress={onSignInClick}><AppText text={" Sign in"} color={GLOBAL.Color.c1} size={16} fontFamily={'Montserrat-Bold'} /></TouchableOpacity>
        </View>

        <View style={socialView}>
          <TouchableOpacity onPress={onFacebookClicked}><AppImage source={require('../../Assets/facebook.png')} width={35} /></TouchableOpacity>
          <TouchableOpacity onPress={onGoogleClicked}><AppImage source={require('../../Assets/google.png')} width={35} /></TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}
