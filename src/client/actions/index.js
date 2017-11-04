import constants from '../constants';

export default {
  fetchUsers: () => async (dispatch, getState, api) => {
    const res = await api.get(`/users`);

    dispatch({
      type: constants.FETCH_USERS,
      payload: res
    });
  },

  fetchCurrentUser: () => async (dispatch, getState, api) => {
    const res = await api.get('/current_user');

    dispatch({
      type: constants.FETCH_CURRENT_USER,
      payload: res
    });
  },

  fetchAdmins: () => async (dispatch, getState, api) => {
    const res = await api.get('/admins');

    dispatch({
      type: constants.FETCH_ADMINS,
      payload: res
    });
  }
};
