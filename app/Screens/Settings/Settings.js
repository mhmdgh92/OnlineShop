import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { AppTopBar, AppToggleBTN, AppPicker, AppBTN } from '../Common/';
import { ListItem } from './Components/';
import { useSelector, useDispatch } from 'react-redux';
import { saveUser } from "../../redux/slices/userSlice";

export default function Settings(props) {

  //States
  const userSlice = useSelector(state => state.user);

  const {
    settings
  } = userSlice.userState;
  const [curSettings, setCurSettings] = useState({ _notifications: settings.notifications, _region: settings.region, _currency: settings.currency });
  const [onMount, setOnMount] = useState(true);
  const [loading, setLoading] = useState(false);
  const [onDataSaved, setOnDataSaved] = useState(false);
  //Dispatch
  const dispatch = useDispatch();
  //Reducers
  const SaveUser = (data) => { dispatch(saveUser(data)); }


  const {
    _notifications,
    _region,
    _currency
  } = curSettings;

  useEffect(() => {
    if (loading && onDataSaved) {
      goBack();
      return;
    }
    if (onMount) {
      setDataFromUserObj();
      setOnMount(false);
      return;
    }
  }, [onDataSaved, onMount]);

  async function setDataFromUserObj() {
    const {
      notifications,
      region,
      currency
    } = settings;
    await setCurSettings({ _notifications: notifications, _region: region, _currency: currency })
  }

  function toggleSwitch() {
    setCurSettings({ ...curSettings, _notifications: !_notifications })
  }

  function setRegionSelected(newRegion) {
    setCurSettings({ ...curSettings, _region: newRegion })
  }

  function setCurrencySelected(newCurrency) {
    setCurSettings({ ...curSettings, _currency: newCurrency })
  }

  function onSaveClicked() {
    setLoading(true);
    saveData();
  }

  async function saveData() {
    const tempUserState = JSON.parse(JSON.stringify(userSlice.userState));
    tempUserState.settings = { notifications: _notifications, region: _region, currency: _currency };
    await SaveUser(tempUserState);
    setOnDataSaved(true);
  }

  function goBack() {
    props.navigation.goBack();
  }

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <AppTopBar title={'Settings'} />
      <ListItem icon={'bell-outline'} title={'Notifications'}><AppToggleBTN isEnabled={_notifications} toggleSwitch={() => toggleSwitch()} /></ListItem>
      <ListItem icon={'globe-model'} title={'Region'}><AppPicker setItemSelected={(value) => setRegionSelected(value)} picked={_region} items={['Europe', 'N-America', 'S-America', 'Asia', 'Africa', 'Australia']} /></ListItem>
      <ListItem icon={'cash'} title={'Currency'}><AppPicker setItemSelected={(value) => setCurrencySelected(value)} picked={_currency} items={['USD', 'GBP', 'Eur', 'Rial']} /></ListItem>
      <AppBTN loading={loading} text={'Save'} marginTop={425} onPress={() => onSaveClicked()} />
    </View>
  );
}