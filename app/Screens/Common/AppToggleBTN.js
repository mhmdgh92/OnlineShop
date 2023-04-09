import React,{useState} from 'react';
import {View,Text,TouchableOpacity,Switch} from 'react-native';
const GLOBAL = require('./Globals');
import {AppText} from './';
import {normalize,heightPixel,widthPixel} from './Utils/PixelNormalization';

  const AppToggleBTN = (props) => {
    const [isEnabled, setisEnabled] = useState(false);

    function toggleSwitch(){
        setisEnabled(!isEnabled);
    }

    return (
      <Switch
      style={{alignSelf:'flex-end'}}
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    );
}
export default AppToggleBTN;
