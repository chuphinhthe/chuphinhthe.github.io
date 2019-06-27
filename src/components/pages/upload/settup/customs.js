/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updatePhotoCustom, updateCustomQuantity } from 'modules/upload/action';
import CustomSelect from './customselect';

class Customs extends Component {
  handleUpdateCustom = (index, indexCustom, item) => {
    const { updatePhotoCustomAction } = this.props;
    updatePhotoCustomAction(index, indexCustom, item);
  };

  handleUpdateQuantity = (index, indexCustom, custom, type) => {
    const newData = { ...custom };
    const newQuantity = newData.cusquantity;
    const { updateCustomQuantityAction } = this.props;
    if (type === 'plus') {
      newData.cusquantity = newQuantity + 1;
    } else if (newQuantity > 1) {
      newData.cusquantity = newQuantity - 1;
    }

    updateCustomQuantityAction(index, indexCustom, newData);
  };

  render() {
    const { customs, index } = this.props;
    return customs.map((custom, indexCustom) => (
      <div
        key={`checkout_settup__custom__${indexCustom.toString()}`}
        className="checkout_settup__custom"
      >
        <div className="row no-gutters align-items-center">
          <div className="col-md-6">
            <CustomSelect
              index={index}
              indexCustom={indexCustom}
              custom={custom}
              onSelect={this.handleUpdateCustom}
            />
          </div>
          <div className="col-md-3">
            <div className="checkout_settup__controls">
              <button
                onClick={() => this.handleUpdateQuantity(index, indexCustom, custom, 'minus')}
                className="checkout_settup__control checkout_settup__down"
                type="button"
              >
                <svg aria-hidden="true" title="icon__minus" width="12" height="2">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__minus" />
                </svg>
              </button>
              <div className="checkout_settup__quantiry">{custom.cusquantity}</div>
              <button
                onClick={() => this.handleUpdateQuantity(index, indexCustom, custom, 'plus')}
                className="checkout_settup__control checkout_settup__up"
                type="button"
              >
                <svg aria-hidden="true" title="icon__plus__small" width="12" height="12">
                  <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__plus__small" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    ));
  }
}

Customs.defaultProps = {
  customs: [],
};

const mapStateToProps = ({ upload }, ownProps) => ({
  customs: upload.data.listFile[ownProps.index].customs,
});

const mapDispatchToProps = {
  updatePhotoCustomAction: updatePhotoCustom,
  updateCustomQuantityAction: updateCustomQuantity,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Customs);
