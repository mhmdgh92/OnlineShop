import { View } from 'react-native';
import AppText from '../../Common/AppText';
import React from 'react';
import PropTypes from 'prop-types';

export const TestChildComp = (props) => {

  return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
  </View>

}

TestChildComp.propTypes = {
  hola: PropTypes.shape({
    mola: PropTypes.number.isRequired
  }).isRequired
};

// optionalArray: PropTypes.array,
// optionalBigInt: PropTypes.bigint,
// optionalBool: PropTypes.bool,
// optionalFunc: PropTypes.func,
// optionalNumber: PropTypes.number,
// optionalObject: PropTypes.object,
// optionalString: PropTypes.string,
// optionalSymbol: PropTypes.symbol,