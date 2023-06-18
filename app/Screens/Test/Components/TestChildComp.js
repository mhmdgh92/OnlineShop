import React from 'react';
import { View } from 'react-native';
import AppText from '../../Common/AppText';
import PropTypes from 'prop-types';

const TestChildComp = (props) => {

  return <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <AppText text={'Age is: ' + props.hola.mola} fontFamily={'Montserrat-Bold'} size={29} />
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

export default TestChildComp;