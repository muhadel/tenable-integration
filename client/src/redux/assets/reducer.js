import actions from './actions';

const initState = [];

export default function reducer(state = initState, action) {
  switch (action.type) {
    case actions.GET_ASSETS:
      return [...action.payload];

    default:
      return state;
  }
}
