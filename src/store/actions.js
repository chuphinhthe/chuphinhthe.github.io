export const GLOGAL_ACTIONS = {
  UPDATE_USER_INFO: 'UPDATE_USER_INFO',
  UPDATE_APP_LOADING: 'UPDATE_APP_LOADING',
};

export const updateAppLoading = payload => (dispatch) => {
  dispatch({
    type: GLOGAL_ACTIONS.UPDATE_APP_LOADING,
    payload,
  });
};
