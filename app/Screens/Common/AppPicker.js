import React, { useState } from 'react';
import { heightPixel } from './Utils/PixelNormalization';
import { Picker } from '@react-native-picker/picker';

const AppPicker = (props) => {
  const [selected, setSelected] = useState(props.picked ? props.picked : 0);

  function Item(name, id) {
    return (
      <Picker.Item key={id} label={name} value={id} />
    );
  }

  function setThisItemSelected(itemValue) {
    setSelected(itemValue);
    if (props.setItemSelected)
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
