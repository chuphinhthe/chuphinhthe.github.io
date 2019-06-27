import React, { Component } from 'react';
import { connect } from 'react-redux';
import Momo from 'src/assets/images/momo.jpg';
import { shippingFee, pricing } from 'constants';
import { formatNumber } from 'utils';
import { updatePaymentInfo, updateStep } from 'modules/upload/action';
import CartItem from './cart-item';
import './style.scss';

class Payment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cartTotal: 0,
    };
  }

  componentDidMount() {
    const { files } = this.props;
    let total = 0;

    files.forEach((item) => {
      if (item.type !== 'Custom') {
        total += (item.quantity * pricing[item.type].value);
      } else {
        let totalCustom = 0;
        item.customs.forEach((itemCustom) => {
          totalCustom += (itemCustom.quantity * pricing[itemCustom.type].value);
          total += totalCustom;
        });
      }
    });

    this.setState({
      cartTotal: total + shippingFee,
    });
  }

  renderCartItems = () => {
    const { files } = this.props;

    return files.map((item, index) => (
      <CartItem index={index} photo={item} key={`cart_item_${index.toString()}`} />
    ));
  };

  handleOnChange = e => {
    const { updatePaymentInfoAction } = this.props;
    updatePaymentInfoAction(e.target.name, e.target.value);
  };

  render() {
    const { paymentInfo, updateStepAction } = this.props;
    const { name, phone, address_1, address_2, shipping, payment } = paymentInfo;

    const { cartTotal } = this.state;

    return (
      <div className="checkout_payment">
        <div className="row">
          <div className="col-md-8">
            <div className="checkout_payment__ship">
              <h3 className="checkout_payment__title">Shipping Information</h3>

              <div className="checkout_payment__item">
                <label className="checkout_payment__label" htmlFor="name">
                  Name
                  <span>Required</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="e.g: John Appleseed"
                  className="form-control checkout_payment__input"
                  value={name}
                  onChange={this.handleOnChange}
                />
              </div>

              <div className="checkout_payment__item">
                <label className="checkout_payment__label" htmlFor="phone">
                  Phone Number
                  <span>Required</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="e.g: +123 4567 8912"
                  className="form-control checkout_payment__input"
                  value={phone}
                  onChange={this.handleOnChange}
                />
              </div>

              <div className="checkout_payment__item">
                <label className="checkout_payment__label" htmlFor="address">
                  Address
                  <span>Required</span>
                </label>
                <input
                  type="text"
                  name="address_1"
                  id="address_1"
                  placeholder="Address Line 1"
                  className="form-control checkout_payment__input"
                  value={address_1}
                  onChange={this.handleOnChange}
                />
                <input
                  type="text"
                  name="address_2"
                  id="address_2"
                  placeholder="Address Line 2"
                  className="form-control checkout_payment__input"
                  value={address_2}
                  onChange={this.handleOnChange}
                />
              </div>

              <hr className="checkout_payment__device mb-4 mt-4" />

              <div className="checkout_payment__item mb-5">
                <label className="checkout_payment__label" htmlFor="shipping">
                  Shipping Method
                </label>

                <div className="checkout_payment__options">
                  <div className="checkout_payment__option custom_checkbox">
                    <label className="custom_checkbox__label">
                      <input
                        type="radio"
                        name="shipping"
                        value="fast"
                        id="shipping_1"
                        className="custom_checkbox__input sr-only"
                        checked={shipping === 'fast'}
                        onChange={this.handleOnChange}
                      />
                      <div className="custom_checkbox__content">
                        <div className="custom_checkbox__text">
                          Fast Delivery (Under 2 Hours)
                          <span>Adds 30.000 VND</span>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="checkout_payment__option custom_checkbox">
                    <label className="custom_checkbox__label">
                      <input
                        type="radio"
                        name="shipping"
                        value="normal"
                        id="shipping_2"
                        className="custom_checkbox__input sr-only"
                        checked={shipping === 'normal'}
                        onChange={this.handleOnChange}
                      />
                      <div className="custom_checkbox__content">
                        <div className="custom_checkbox__text">
                          Normal Delivery (In 24 Hours)
                          <span>Adds 20.000 VND</span>
                        </div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              <div className="checkout_payment__item">
                <label className="checkout_payment__label" htmlFor="payment">
                  Payment Method
                </label>
                <div className="checkout_payment__options">
                  <div className="checkout_payment__option custom_checkbox">
                    <label className="custom_checkbox__label">
                      <input
                        type="radio"
                        name="payment"
                        id="payment_1"
                        value="cod"
                        className="custom_checkbox__input sr-only"
                        checked={payment === 'cod'}
                        onChange={this.handleOnChange}
                      />
                      <div className="custom_checkbox__content">
                        <div className="custom_checkbox__icon cod">
                          <svg aria-hidden="true" title="icon__cod" width="32" height="28">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__cod" />
                          </svg>
                        </div>
                        <div className="custom_checkbox__text">Cash-On Delivery</div>
                      </div>
                    </label>
                  </div>

                  <div className="checkout_payment__option custom_checkbox">
                    <label className="custom_checkbox__label">
                      <input
                        type="radio"
                        name="payment"
                        id="payment_2"
                        value="momo"
                        className="custom_checkbox__input sr-only"
                        checked={payment === 'momo'}
                        onChange={this.handleOnChange}
                      />
                      <div className="custom_checkbox__content">
                        <div className="custom_checkbox__icon momo">
                          <img src={Momo} />
                        </div>
                        <div className="custom_checkbox__text">Momo - Mobile Money</div>
                      </div>
                    </label>
                  </div>

                  <div className="checkout_payment__option custom_checkbox">
                    <label className="custom_checkbox__label">
                      <input
                        type="radio"
                        name="payment"
                        id="payment_2"
                        value="atm"
                        className="custom_checkbox__input sr-only"
                        checked={payment === 'atm'}
                        onChange={this.handleOnChange}
                      />
                      <div className="custom_checkbox__content">
                        <div className="custom_checkbox__icon atm">
                          <svg aria-hidden="true" title="icon__atm" width="31" height="12">
                            <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#icon__atm" />
                          </svg>
                        </div>
                        <div className="custom_checkbox__text">Online ATM</div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="checkout_payment__checkout">
              <h4 className="checkout_payment__sub">Order Information</h4>

              <hr className="checkout_payment__device mt-4 mb-4" />

              <div className="checkout_payment__list">{this.renderCartItems()}</div>

              <div className="checkout_payment__selected_ship">
                <div className="label">Shipping Fee</div>
                <div className="value">
                  {formatNumber(shippingFee)}
                  VND
                </div>
              </div>

              <div className="checkout_payment__total">
                <div className="label">Total</div>
                <div className="value">
                  {formatNumber(cartTotal)}
                  <span>VND</span>
                </div>
              </div>

              <div className="checkout_payment__controls">
                <button
                  type="button"
                  className="checkout_navgation checkout_navgation__prev steenify_btn steenify_btn__secondary w-100 mb-3"
                  onClick={() => updateStepAction('settup')}
                >
                  Go back
                </button>

                <button
                  type="button"
                  className="checkout_payment__confirm steenify_btn steenify_btn__main w-100"
                >
                  Confirm & Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ upload }) => ({
  files: upload.data.listFile,
  paymentInfo: upload.data.paymentInfo,
});

const mapDispatchToProps = {
  updatePaymentInfoAction: updatePaymentInfo,
  updateStepAction: updateStep,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Payment);
