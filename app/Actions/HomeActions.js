import {LOADING_FAILED, LOADING_SUCCESS, LOADING_TASKS} from './types';

import axios from 'axios';

const handleResponse = (dispatch, data) => {
  if (data.status) {
    dispatch({type: LOADING_SUCCESS, tasks: data, msg: 'Done'});
  } else {
    dispatch({type: LOADING_FAILED, error: 'error'});
  }
};

export const fetchTasks = () => {
  return dispatch => {
    dispatch({type: LOADING_TASKS});
    const url = 'http://5cedc25fb779120014b4a49f.mockapi.io/api/v1/Home/1';
    axios
      .get(url)
      .then(resp => handleResponse(dispatch, resp.data))
      .catch(error => console.log('Error ' + error));
  };
};
