import React from 'react';
import { View, Text } from 'react-native';
import { appTextStyle } from "./styles";
import PropTypes from 'prop-types';

const AppText = (props) => {

  const {
    numberOfLines
  } = props;

  const { container, textStyle } = appTextStyle(props);

  return (
    <View style={container}>
      <Text numberOfLines={numberOfLines ? numberOfLines : 0} style={textStyle}>
        {props.text ? props.text : 'insert Text'}
      </Text>
    </View >
  );
}

AppText.propTypes = {
  props: PropTypes.shape({
    text: PropTypes.string
  })
};

export default AppText;