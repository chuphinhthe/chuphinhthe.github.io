import update from 'react-addons-update';
import { ACTIONS_UPLOAD } from './action';

const initialState = {
  ui: {
    step: 'upload', // 'settup', 'payment'
  },
  data: {
    listFile: [],
    paymentInfo: {
      name: '',
      phone: '',
      address_1: '',
      address_2: '',
      shipping: 'fast',
      payment: 'cod',
    },
  },
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS_UPLOAD.ADD_IMAGES:
      return update(state, {
        data: {
          listFile: {
            $push: action.payload,
          },
        },
      });
    case ACTIONS_UPLOAD.UPDATE_STEP:
      return update(state, {
        ui: {
          step: {
            $set: action.payload,
          },
        },
      });
    case ACTIONS_UPLOAD.UPDATE_PHOTO: {
      return update(state, {
        data: {
          listFile: {
            $set: action.payload,
          },
        },
      });
    }
    case ACTIONS_UPLOAD.ADD_CUSTOM: {
      return update(state, {
        data: {
          listFile: {
            [action.index]: {
              customs: {
                $push: action.payload,
              },
            },
          },
        },
      });
    }
    case ACTIONS_UPLOAD.UPDATE_CUSTOM: {
      return update(state, {
        data: {
          listFile: {
            [action.index]: {
              customs: {
                [action.indexCus]: {
                  $set: action.payload,
                },
              },
            },
          },
        },
      });
    }
    case ACTIONS_UPLOAD.DELETE_PHOTO: {
      const { index } = action;
      return update(state, {
        data: {
          listFile: {
            $set: state.data.listFile.filter((item, indexFile) => index !== indexFile),
          },
        },
      });
    }
    case ACTIONS_UPLOAD.RESET_UPLOAD:
      return initialState;
    case ACTIONS_UPLOAD.UPDATE_PAYMENT_INFO: {
      return update(state, {
        data: {
          paymentInfo: {
            [action.name]: {
              $set: action.value,
            },
          },
        },
      });
    }
    default:
      return state;
  }
};

export default reducers;
