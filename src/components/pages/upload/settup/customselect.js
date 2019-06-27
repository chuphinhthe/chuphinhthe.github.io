/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { customOrderList } from 'constants';
import { formatNumber } from 'utils';

class CustomSelect extends Component {
  state = {
    isOpen: false,
  };

  handleSelect = (item) => {
    const { onSelect, index, indexCustom } = this.props;

    onSelect(index, indexCustom, item);

    this.setState({
      isOpen: false,
    });
  };

  toggleDropdown = () => {
    this.setState(state => ({
      isOpen: !state.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    const { custom } = this.props;
    return (
      <div className={`custom_select ${isOpen ? ' active' : ''}`}>
        <div
          role="button"
          tabIndex="0"
          className="custom_select__selected"
          onClick={this.toggleDropdown}
        >
          <div className="custom_select__content d-flex justify-content-between">
            <div className="checkout_settup__name">{custom.custitle}</div>
            <div className="checkout_settup__price">
              <span>{formatNumber(custom.cusprice)}</span>
              VND
            </div>
          </div>
          <div className="custom_select__icon">
            <svg aria-hidden="true" title="icon__down" width="12" height="9">
              <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__down" />
            </svg>
          </div>
        </div>
        <div className="custom_select__list">
          {customOrderList.map(item => (
            <div className="custom_select__item" key={item.type}>
              <button
                className="custom_select__trigger"
                type="button"
                onClick={() => this.handleSelect(item)}
              >
                <span>{item.label}</span>
                <strong>
                  <span>{formatNumber(item.value)}</span>
                  VND
                </strong>
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

CustomSelect.defaultProps = {
  custom: {},
  onSelect: () => {},
};

export default CustomSelect;
