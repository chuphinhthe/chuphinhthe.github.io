import React, { Component } from 'react';
import { connect } from 'react-redux';
import { photoTypes } from 'constants';
import { formatNumber, getTotalCustom } from 'utils';

import {
  updatePhotoType,
  deletePhoto,
  updatePhotoQuantiry,
  addPhotoCustom,
} from 'modules/upload/action';

import Customs from './customs';

class Photo extends Component {
  renderPhotoTypes = () => {
    const { type, index, updatePhotoTypeAction } = this.props;

    return photoTypes.map(item => (
      <button
        className={`checkout_settup__type ${type === item.value ? 'active' : ''}`}
        type="button"
        key={item.value}
        onClick={() => updatePhotoTypeAction(item.value, index)}
      >
        <span>{item.label}</span>
      </button>
    ));
  };

  render() {
    const {
      url,
      index,
      type,
      price,
      title,
      quantity,
      updatePhotoQuantiryAction,
      deletePhotoAction,
      addPhotoCustomAction,
      customs,
    } = this.props;
    return (
      <div className="checkout_settup__item">
        <div className="row no-gutters">
          <div className="col-md-3">
            <div className="checkout_settup__img">
              <img src={url} alt="checkout_settup__item" />
            </div>
          </div>

          <div className="col-lg-9">
            <div className="checkout_settup__info">
              <div className="checkout_settup__step">
                <div className="checkout_settup__top">
                  <h3 className="checkout_settup__header">
                    1. What do you want to use this photo for?
                    <span>Pick One</span>
                  </h3>
                  <button
                    className="checkout_settup__close"
                    type="button"
                    onClick={() => deletePhotoAction(index)}
                  >
                    <svg aria-hidden="true" title="icon__close" width="18" height="19">
                      <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__close" />
                    </svg>
                  </button>
                </div>

                <div className="checkout_settup__types">{this.renderPhotoTypes()}</div>
                <div className={`checkout_settup__bottom ${type ? ' active' : ''}`}>
                  <div
                    className={`checkout_settup__default ${
                      type && type !== 'Custom' ? ' active' : ''
                    }`}
                  >
                    <h3 className="checkout_settup__header">2. Select Amount</h3>
                    <div className="row no-gutters align-items-center">
                      <div className="col-md-6">
                        <div className="checkout_settup__detail">
                          <div className="checkout_settup__name">{title}</div>
                          <div className="checkout_settup__price">
                            <span>{formatNumber(price)}</span>
                            VND
                          </div>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="checkout_settup__controls">
                          <button
                            className="checkout_settup__control checkout_settup__down"
                            type="button"
                            onClick={() => updatePhotoQuantiryAction(index, 'minus')}
                          >
                            <svg aria-hidden="true" title="icon__minus" width="12" height="2">
                              <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#icon__minus"
                              />
                            </svg>
                          </button>
                          <div className="checkout_settup__quantiry">{quantity}</div>
                          <button
                            className="checkout_settup__control checkout_settup__up"
                            type="button"
                            onClick={() => updatePhotoQuantiryAction(index, 'plus')}
                          >
                            <svg
                              aria-hidden="true"
                              title="icon__plus__small"
                              width="12"
                              height="12"
                            >
                              <use
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                xlinkHref="#icon__plus__small"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>

                      <div className="col-md-3">
                        <div className="checkout_settup__total">
                          <strong>Total</strong>
                          <span>{formatNumber(price * quantity)}</span>
                          VND
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`checkout_settup__customs ${
                      type && type === 'Custom' ? ' active' : ''
                    }`}
                  >
                    <h3 className="checkout_settup__header">2. Select Photo Size & Amount</h3>
                    <Customs index={index} />

                    <div className="checkout_settup__add">
                      <div className="row no-gutters align-items-center">
                        <div className="col-6">
                          <button
                            className="steenify_btn steenify_btn__secondary w-100"
                            type="button"
                            onClick={() => addPhotoCustomAction(index)}
                          >
                            Add Another Photo Size
                          </button>
                        </div>
                        <div className="col-6 text-right">
                          <div className="checkout_settup__total">
                            <strong>Total</strong>
                            <span>{formatNumber(getTotalCustom(customs))}</span>
                            VND
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Photo.defaultProps = {
  url: '',
  name: '',
  type: '',
  price: 0,
  title: '',
  quantity: 1,
  customs: [],
};

const mapStateToProps = ({ upload }, ownProps) => {
  const { index } = ownProps;
  const photo = upload.data.listFile[index];
  return {
    ...photo,
    ...ownProps,
  };
};

const mapDispatchToProps = {
  updatePhotoTypeAction: updatePhotoType,
  deletePhotoAction: deletePhoto,
  updatePhotoQuantiryAction: updatePhotoQuantiry,
  addPhotoCustomAction: addPhotoCustom,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Photo);
