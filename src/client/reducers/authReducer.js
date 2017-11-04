import constants from '../constants';

export default (state = null, action) => {
  switch (action.type) {
    case constants.FETCH_CURRENT_USER:
      return action.payload.data || false;

    default:
      return state;
  }
};
