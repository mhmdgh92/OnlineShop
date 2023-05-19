import React, { useState } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const GLOBAL = require('./Globals');
import { heightPixel, widthPixel, normalize } from './Utils/PixelNormalization';
import { Picker } from '@react-native-picker/picker';

const AppPicker = (props) => {

  const [selected, setSelected] = useState(props.picked ? props.picked : props.items[0]);

  function Item(name, id) {
    return (
      <Picker.Item key={id} label={name} value={id} />
    );
  }

  function setThisItemSelected(itemValue) {
    setSelected(itemValue);
    if(props.setItemSelected)
      props.setItemSelected(itemValue);
  }

  function Items() {

    return props.items.map((name, id) => {
      return (
        Item(name, id)
      )
    });
  }

  return (
    <Picker
      style={[{ marginTop: heightPixel(0), width: '100%' }, { ...props.style }]}
      selectedValue={(selected)}
      onValueChange={(itemValue, itemIndex) =>
        setThisItemSelected(itemValue)
      }>
      {Items()}
    </Picker>
  );
}

export default AppPicker;
