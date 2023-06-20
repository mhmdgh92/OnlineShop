import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { appBTNStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppBTN = (props) => {

  const { loading, text } = props;
  const { container, textStyle } = appBTNStyle(props);

  var _text = text ? text : 'Press Here';

  return (
    <TouchableOpacity activeOpacity={0.9} style={container} onPress={loading ? null : props.onPress}>
      {loading ?
        <ActivityIndicator color={'white'} /> :
        <Text style={textStyle}> {_text} </Text>}
    </TouchableOpacity>
  );
}

AppBTN.propTypes = {
  props: PropTypes.shape({
    loading: PropTypes.bool,
    text: PropTypes.string,
    onPress: PropTypes.func,
    color: PropTypes.string,
    borderRadius: PropTypes.number,
    borderWidth: PropTypes.number,
    borderColor: PropTypes.string,
    height: PropTypes.number,
    width: PropTypes.number,
    marginTop: PropTypes.number,
    borderRadius: PropTypes.number,
    textStyle: PropTypes.shape({
      textColor: PropTypes.string,
      fontFamily: PropTypes.string,
      textSize: PropTypes.number,
      textColor: PropTypes.string,
    })
  })
};
