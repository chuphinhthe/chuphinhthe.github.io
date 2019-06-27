import React, { Component } from 'react';
import { pricing } from 'constants';

export default class CartItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalCustom: 0,
    };
  }

  componentDidMount() {
    const { photo } = this.props;
    this.getCustomTotal(photo.customs);
  }

  getCustomTotal = (listCustom) => {
    listCustom.forEach((item) => {
      this.setState({
        totalCustom: this.state.totalCustom + item.quantity * pricing[item.type].value,
      });
    });
  };

  render() {
    const { photo } = this.props;
    const { totalCustom } = this.state;
    return (
      <div className="checkout_payment__file">
        <div className="checkout_payment__img">
          <img src={photo.url} alt="icon__news" />
        </div>
        <div className="checkout_payment__info">
          <div className="checkout_payment__name">
            <span>{`${photo.quantity} `}</span>
x
            <span>{` ${photo.title}`}</span>
          </div>
          <div className={`checkout_payment__price ${photo.type !== 'Custom' ? 'active' : ''}`}>
            <span>{photo.quantity * pricing[photo.type].value}</span>
            VND
          </div>
          <div className={`checkout_payment__price ${photo.type === 'Custom' ? 'active' : ''}`}>
            <span>{totalCustom}</span>
            VND
          </div>
        </div>
      </div>
    );
  }
}
