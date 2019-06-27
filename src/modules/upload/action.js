import { pricing, customOrderList } from 'constants';

/* eslint-disable func-names */
export const ACTIONS_UPLOAD = {
  ADD_IMAGES: 'ADD_IMAGES',
  UPDATE_STEP: 'UPDATE_STEP',
  UPDATE_PHOTO: 'UPDATE_PHOTO',
  DELETE_PHOTO: 'DELETE_PHOTO',
  RESET_UPLOAD: 'RESET_UPLOAD',
  UPDATE_PAYMENT_INFO: 'UPDATE_PAYMENT_INFO',
  ADD_CUSTOM: 'ADD_CUSTOM',
  UPDATE_CUSTOM: 'UPDATE_CUSTOM',
};

export const addImages = data => (dispatch) => {
  dispatch({
    type: ACTIONS_UPLOAD.ADD_IMAGES,
    payload: data,
  });
};

export const updateStep = step => (dispatch) => {
  dispatch({
    type: ACTIONS_UPLOAD.UPDATE_STEP,
    payload: step,
  });
};

export const addFiles = files => async (dispatch) => {
  Array.prototype.forEach.call(files, (file) => {
    const img = document.createElement('img');
    img.src = window.URL.createObjectURL(file);
    img.onload = function () {
      const url = this.src;
      dispatch({
        type: ACTIONS_UPLOAD.ADD_IMAGES,
        payload: [
          {
            url,
            file,
            name: file.name,
            type: '',
            price: 0,
            title: '',
            quantity: 1,
            customs: [],
          },
        ],
      });
      // window.URL.revokeObjectURL(this.src);
    };
  });
};

export const updatePhotoType = (photoType, index) => (dispatch, getState) => {
  const state = getState();
  const newData = Object.assign({}, state.upload.data);
  const selectedType = pricing[photoType];
  newData.listFile[index].type = photoType;
  newData.listFile[index].price = selectedType.value;
  newData.listFile[index].title = selectedType.label;

  dispatch({
    type: ACTIONS_UPLOAD.UPDATE_PHOTO,
    payload: newData.listFile,
    index,
  });
};

export const updatePhotoQuantiry = (index, type) => (dispatch, getState) => {
  const state = getState();
  const newData = Object.assign({}, state.upload.data);
  const newQuantity = newData.listFile[index].quantity;

  if (type === 'plus') {
    newData.listFile[index].quantity = newQuantity + 1;
  } else if (newQuantity > 1) {
    newData.listFile[index].quantity = newQuantity - 1;
  }

  dispatch({
    type: ACTIONS_UPLOAD.UPDATE_PHOTO,
    index,
    payload: newData.listFile,
  });
};

export const deletePhoto = index => (dispatch) => {
  dispatch({
    type: ACTIONS_UPLOAD.DELETE_PHOTO,
    index,
  });
};

export const updatePaymentInfo = (name, value) => (dispatch) => {
  dispatch({
    type: ACTIONS_UPLOAD.UPDATE_PAYMENT_INFO,
    name,
    value,
  });
};

export const addPhotoCustom = index => (dispatch) => {
  const newCustom = {
    custype: customOrderList[0].type,
    cusprice: customOrderList[0].value,
    custitle: customOrderList[0].label,
    cusquantity: 1,
  };

  dispatch({
    type: ACTIONS_UPLOAD.ADD_CUSTOM,
    payload: [newCustom],
    index,
  });
};

export const updatePhotoCustom = (index, indexCus, item) => (dispatch) => {
  const newCustom = {
    custype: item.type,
    cusprice: item.value,
    custitle: item.label,
    cusquantity: 1,
  };

  dispatch({
    type: ACTIONS_UPLOAD.UPDATE_CUSTOM,
    payload: newCustom,
    index,
    indexCus,
  });
};

export const updateCustomQuantity = (index, indexCus, payload) => (dispatch) => {
  dispatch({
    type: ACTIONS_UPLOAD.UPDATE_CUSTOM,
    payload,
    index,
    indexCus,
  });
};
