import React from 'react';
import { View } from 'react-native';
import { AppTopBar, AppLoader, AppToggleBTN, AppPicker, AppBTN } from '../Common/';
import { ListItem } from './Components/';
import user from '../../user';

class Settings extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fullLoading: true,
      loading: false,
      notifications: false,
      region: 'Europe',
      currency: 'USD'
    }
  }

  async componentDidMount() {
    await this.checkSavedSettings();
  }

  async checkSavedSettings() {
    let userObj = user.userObj;
    if (userObj.settings)
      this.setData(userObj.settings);
    else {
      userObj.settings = {
        notifications: false, region: 'Europe', currency: 'USD'
      }
      await user.saveData(userObj);
      this.setState({ fullLoading: false })
    }
  }

  setData(data) {
    const {
      notifications,
      region,
      currency
    } = data;
    this.setState({ fullLoading: false, notifications: notifications, region: region, currency: currency })
  }

  async saveData() {
    const {
      notifications,
      region,
      currency
    } = this.state;
    user.userObj.settings = {
      notifications: notifications, region: region, currency: currency
    }
    await user.saveDataObj();
    this.setState({ loading: false })
  }

  async onSaveClicked() {
    this.setState({ loading: true })
    await this.saveDataObj();
  }

  toggleSwitch() {
    this.setState({ notifications: !this.state.notifications })
  }

  setRegionSelected(newRegion) {
    this.setState({ region: newRegion })
  }

  setCurrencySelected(newCurrency) {
    this.setState({ currency: newCurrency })
  }

  render() {
    const { fullLoading, loading, notifications, region, currency } = this.state;
    if (fullLoading)
      return <AppLoader />
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <AppTopBar title={'Settings'} />
        <ListItem icon={'bell-outline'} title={'Notifications'}><AppToggleBTN isEnabled={notifications} toggleSwitch={() => this.toggleSwitch()} /></ListItem>
        <ListItem icon={'globe-model'} title={'Region'}><AppPicker setItemSelected={(value) => this.setRegionSelected(value)} picked={region} items={['Europe', 'N-America', 'S-America', 'Asia', 'Africa', 'Australia']} /></ListItem>
        <ListItem icon={'cash'} title={'Currency'}><AppPicker setItemSelected={(value) => this.setCurrencySelected(value)} picked={currency} items={['USD', 'GBP', 'Eur', 'Rial']} /></ListItem>
        <AppBTN loading={loading} text={'Save'} marginTop={425} onPress={() => this.onSaveClicked()} />
      </View>
    );
  }
}

export default Settings;
