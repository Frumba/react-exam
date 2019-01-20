import axios from 'axios';

export function fetchJedis() {
  return (dispatch) => {
    axios.get('http://localhost:3001/jedis').then((res) => {
      dispatch({
        type: 'FETCH_FINISH',
        payload: res.data
      });
    });
  };
}
