import React, { useState } from 'react';
import { Switch } from 'react-native';

const AppToggleBTN = (props) => {
  const [isEnabled, setisEnabled] = useState(props.isEnabled ? props.isEnabled : false);

  function toggleSwitch() {
    setisEnabled(!isEnabled);
    if (props.toggleSwitch)
      props.toggleSwitch(isEnabled);
  }

  return (
    <Switch
      style={{ alignSelf: 'flex-end' }}
      trackColor={{ false: '#767577', true: '#81b0ff' }}
      thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
}
export default AppToggleBTN;
