import React, { useEffect, useState } from 'react';
import { Dimensions, View, ScrollView, Alert } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
import { AppRoundedImage, AppTopBar, AppBottomBar } from '../Common/';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import { useSelector, useDispatch } from 'react-redux';
import { saveUser } from "../../redux/slices/userSlice";
import { saveProfile } from "../../redux/slices/profileSlice";
import { ProfileForm } from './Components/';

export default function Profile(props) {


  const [onUpdateProfile, setOnUpdateProfile] = useState(false);

  //Dispatch
  const dispatch = useDispatch();
  //States
  const userSlice = useSelector(state => state.user);
  const profileSlice = useSelector(state => state.profile);
  //Profile Reducers
  const SaveProfile = (data) => { dispatch(saveProfile(data)); }
  //User Reducers
  const SaveUser = (data) => { dispatch(saveUser(data)); }

  const {
    userState
  } = userSlice;

  const {
    updateProfileLoading,
    profileState
  } = profileSlice;

  useEffect(() => {
    if (onUpdateProfile && profileState) {
      saveUserNewProfile(profileState);
      return;
    }
  }, [profileState]);

  const onSubmit = async (data) => {
    await SaveProfile(data);
    setOnUpdateProfile(true);
  };

  async function saveUserNewProfile(newInfo) {
    setOnUpdateProfile(false);
    const newUserState = JSON.parse(JSON.stringify(userState));
    const {
      FirstName,
      LastName,
      Phone
    } = newInfo;
    newUserState.FirstName = FirstName;
    newUserState.LastName = LastName;
    newUserState.Phone = Phone;
    await SaveUser(newUserState);
    Alert.alert('Profile updated successfully!');
  }

  return (
    <View>
      <ScrollView>
        <View style={{
          alignItems: 'center',
          flexDirection: 'column',
          height: heightPixel(787), width: ScreenWidth
        }}>
          <AppTopBar />
          <AppRoundedImage marginTop={30} width={110} height={115} />
          <ProfileForm loading={updateProfileLoading} onSubmitClicked={onSubmit} userObj={userState} />
        </View>
      </ScrollView>
      <AppBottomBar choosed={4} />
    </View>
  );

}