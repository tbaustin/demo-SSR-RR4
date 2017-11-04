import constants from '../constants';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.FETCH_USERS:
      return action.payload.data;
    default:
      return state;
  }
};
