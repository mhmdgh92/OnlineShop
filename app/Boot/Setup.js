import React from 'react';
import App from '../App';
import { Provider } from 'react-redux';
import toolKitStore from '../redux/toolKitStore';

function Setup() {

  return (
    <Provider store={toolKitStore}>
      <App />
    </Provider>
  );

}
export default Setup;