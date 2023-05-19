import React, { useState, useEffect } from 'react';
import { Dimensions, View, ScrollView, Alert } from 'react-native';
const ScreenWidth = Dimensions.get('window').width;
import { AppRoundedImage, AppTextInput, AppTopBar, AppText, AppBTN, AppBottomBar } from '../Common/';
import { heightPixel } from '../Common/Utils/PixelNormalization';
import user from '../../user';
import firestore from '@react-native-firebase/firestore';
import { ProfileForm } from './Components/';

export default function Profile(props) {

  const [data, setData] = useState(getDataFirstState());
  const [loading, setLoading] = useState(false);

  const {
    Status,
    FirstName,
    LastName,
    Phone,
    Email
  } = data;

  const {
    firstName,
    lastName,
    phone,
    email
  } = user.userObj;

  function getDataFirstState() {
    return { Status: 0, FirstName: firstName, LastName: lastName, Phone: phone, Email: email }
  }

  useEffect(() => {
    if (!loading && Status === 1)
      saveClicked();
  }, [data]);

  function saveClicked() {
    setLoading(true)
    saveUserDataFireStore();
  }

  async function saveUserDataFireStore() {
    await firestore()
      .collection('users')
      .doc(Email)
      .set({
        firstName: '' + FirstName,
        lastName: '' + LastName,
        phone: '' + Phone
      })
      .then(() => {
        saveUserDataLocally();
      });
  }

  async function saveUserDataLocally() {
    const userSavedAcc = user.userObj;
    userSavedAcc.firstName = FirstName;
    userSavedAcc.lastName = LastName;
    userSavedAcc.phone = Phone;
    await user.saveData(userSavedAcc);
    Alert.alert('Your info saved successfully!');
    setThisData(0)
    setLoading(false)
  }

  const onSubmit = data => {
    const {
      FirstName,
      LastName,
      Phone
    } = data;
    setThisData(1, FirstName, LastName, Phone);
  };

  function setThisData(status, firstName, lastName, phone) {
    setData({ Status: status, FirstName: firstName, LastName: lastName, Phone: phone, Email: email });
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
          <ProfileForm loading={loading} onSubmitClicked={onSubmit} userObj={user.userObj} />
        </View>
      </ScrollView>
      <AppBottomBar choosed={4} />
    </View>
  );

}