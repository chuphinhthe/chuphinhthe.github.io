import update from 'react-addons-update';
import { combineReducers } from 'redux';

import upload from 'modules/upload/reducer';
import { GLOGAL_ACTIONS } from './actions';

const initialState = {
  ui: {
    loading: false,
  },
  data: {
    user: {},
  },
};

const global = (state = initialState, action) => {
  switch (action.type) {
    case GLOGAL_ACTIONS.UPDATE_APP_LOADING:
      return update(state, {
        ui: {
          loading: { $set: action.payload },
        },
      });
    default:
      return state;
  }
};

export default combineReducers({
  global,
  upload,
});
