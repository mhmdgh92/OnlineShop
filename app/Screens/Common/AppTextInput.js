import React from 'react';
import { View, TextInput } from 'react-native';
const GLOBAL = require('./Globals');
import { normalize, heightPixel, widthPixel } from './Utils/PixelNormalization';
import { AppCircleIcon } from './';

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
      {hideIcon ? <View style={{ flex: 1 }} /> : <View style={{ flex: iconFlex ? iconFlex : 1 }}><AppCircleIcon {...props} /></View>}
      <View style={{ flex: hideIcon ? 12 : 6 }}><TextInput
        onBlur={onBlur}
        onChangeText={onChangeText}
        value={value}
        defaultValue={defaultValue}
        textAlignVertical={textAlignVertical ? textAlignVertical : 'auto'}
        placeholder={placeholder ? placeholder : 'Email'}
        onEndEditing={(text) => { onEndEditing ? onEndEditing(text.nativeEvent.text) : null }}
        {...props} style={{ margin: 0, marginTop: 0 }} textStyle={props.textStyle} /></View>
    </View>
  );
}

export default AppTextInput;
