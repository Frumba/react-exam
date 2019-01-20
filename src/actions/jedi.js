import axios from 'axios';

import config from '../config';

const jedisUrl = `${config.apiUrl}/jedis`;

export function fetchJedis() {
  return (dispatch) => {
    axios.get(jedisUrl).then((res) => {
      dispatch({
        type: 'FETCH_JEDI_FINISH',
        payload: res.data
      });
    });
  };
}

export function addJedi(name) {
  return (dispatch, getState) => {
    if (!name) {
      console.error('invalid name when adding jedi');
      return Promise.resolve();
    }

    return axios
      .post(jedisUrl, {
        id: getState().jedis.length + 1,
        name
      })
      .then((response) => {
        dispatch({
          type: 'ADD_JEDI_FINISH',
          payload: response.data
        });
      });
  };
}
