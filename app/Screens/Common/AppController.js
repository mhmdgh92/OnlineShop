import React from 'react';
import { View } from 'react-native';
import { AppTextInput, AppText } from './';
import { Controller } from "react-hook-form";


const AppController = (props) => {

  const {
    name,
    control,
    error,
    placeholder,
    rules,
    secureTextEntry,
    iconName,
    keyboardType,
    defaultValue,
    editable
  } = props;

  const getErrorMSG = (error) => {
    if (error.type == 'minLength')
      return error.ref.name + ' is too short'
    if (error.type == 'maxLength')
      return error.ref.name + ' is too long'
    if (error.type == 'pattern')
      return error.ref.name + ' invalid'
    return error.ref.name + ' is required'
  }

  return (
    <View>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, onBlur, value } }) => (
          <AppTextInput
            secureTextEntry={secureTextEntry}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            defaultValue={defaultValue}
            marginTop={10}
            name={iconName}
            editable={editable}
            keyboardType={keyboardType}
          />
        )}
        name={name}
      />
      {error && <AppText margin={5} text={getErrorMSG(error)} />}
    </View>
  );
}

export default AppController;