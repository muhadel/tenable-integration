import axios from 'axios';

const actions = {
  //get
  GET_ASSETS: 'GET_ASSETS',
  GET_ASSETS_ERROR: 'GET_ASSETS_ERROR',

  getAssets: () => (dispatch) => {
    axios
      .get(`http://localhost:5001/api/tenable/assets`)
      .then((res) => {
        console.log('res', res);
        dispatch({
          type: actions.GET_ASSETS,
          payload: res.data.response,
        });
      })
      .catch((err) => {
        console.log('err', err.response);
        dispatch({
          type: actions.GET_ASSETS_ERROR,
        });
      });
  },
};
export default actions;
