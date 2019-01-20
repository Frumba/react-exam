import axios from 'axios';

import config from '../config';

const jedisUrl = `${config.apiUrl}/jedis`;

export function fetchJedis() {
  return (dispatch) => {
    axios.get(jedisUrl).then((res) => {
      dispatch({
        type: 'FETCH_FINISH',
        payload: res.data
      });
    });
  };
}
