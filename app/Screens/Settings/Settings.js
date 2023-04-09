import React, {Component} from 'react';
import {View} from 'react-native';
import {AppTopBar,AppTextInput,AppToggleBTN,AppPicker} from '../Common/';
import {ListItem} from './Components/';

class Settings extends React.Component{

  render() {
    return (
      <View style={{width:'100%',height:'100%'}}>
        <AppTopBar title={'Settings'}/>
        <ListItem icon={'bell-outline'} title={'Notifications'}><AppToggleBTN/></ListItem>
        <ListItem icon={'globe-model'} title={'Region'}><AppPicker items={['Europe','N-America','S-America','Asia','Africa','Australia']}/></ListItem>
        <ListItem icon={'cash'} title={'Currency'}><AppPicker items={['USD','GBP','Eur','Rial']}/></ListItem>
      </View>
    );
  }

}
export default Settings;
