import React from 'react';
import { View, Text } from 'react-native';
import { appTextStyle } from "./styles";
import PropTypes from 'prop-types';

export const AppText = (props) => {

  const {
    numberOfLines,
    text
  } = props;

  const { container, textStyle } = appTextStyle(props);

  var _text = text ? text : 'insert Text';

  return (
    <View style={container}>
      <Text numberOfLines={numberOfLines ? numberOfLines : 0} style={textStyle}>
        {_text}
      </Text>
    </View >
  );
}

AppText.propTypes = {
  props: PropTypes.shape({
    text: PropTypes.string
  })
};