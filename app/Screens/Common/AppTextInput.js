import React from 'react';
import { View, TextInput } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize, heightPixel, widthPixel } from './Utils/PixelNormalization';
import { AppCircleIcon } from './';
import { appTextInputStyle } from "./styles";

const AppTextInput = (props) => {

  const {
    placeholder,
    textAlignVertical,
    hideIcon,
    alignItems,
    height,
    width,
    borderRadius,
    marginTop,
    iconFlex,
    onEndEditing,
    onBlur,
    onChangeText,
    defaultValue,
    value
  } = props;

  const { container,hiddenIconView,showIconView,innerView,inputStyle } = appTextInputStyle(props);

  return (
    <View style={{
      marginTop: heightPixel(marginTop ? marginTop : 0),
      flexDirection: 'row',
      width: widthPixel(width ? width : 320),
      height: heightPixel(height ? height : 50), borderRadius: normalize(borderRadius ? borderRadius : 50),
      borderColor: GLOBAL.Color.borderColor,
      borderWidth: normalize(2.5),
      alignSelf: 'center', justifyContent: 'center',
      alignItems: alignItems ? alignItems : 'center', backgroundColor: GLOBAL.Color.white
    }}>
      {hideIcon ? <View style={hiddenIconView} /> : <View style={showIconView}><AppCircleIcon {...props} /></View>}
      <View style={innerView}><TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        defaultValue={defaultValue}
        textAlignVertical={textAlignVertical ? textAlignVertical : 'auto'}
        placeholder={placeholder ? placeholder : 'email'}
        onEndEditing={(text) => { onEndEditing ? onEndEditing(text.nativeEvent.text) : null }}
        {...props} style={inputStyle} textStyle={props.textStyle} /></View>
    </View>
  );
}

export default AppTextInput;
