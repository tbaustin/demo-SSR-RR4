import constants from '../constants';

export default (state = [], action) => {
  switch (action.type) {
    case constants.FETCH_ADMINS:
      return action.payload.data;
    default:
      return state;
  }
};
