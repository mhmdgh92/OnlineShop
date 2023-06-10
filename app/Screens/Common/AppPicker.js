import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';
import { appPickerStyle } from "./styles";

const AppPicker = (props) => {

  const { container } = appPickerStyle(props);

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
      style={container}
      selectedValue={(selected)}
      onValueChange={(itemValue, itemIndex) =>
        setThisItemSelected(itemValue)
      }>
      {Items()}
    </Picker>
  );
}

export default AppPicker;
