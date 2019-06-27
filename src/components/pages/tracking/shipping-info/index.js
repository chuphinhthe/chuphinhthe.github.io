import React, { PureComponent } from 'react';
import './style.scss';

class ShippingInfo extends PureComponent {
  render() {
    return (
      <div className="tracking__info">
        <div className="row">
          <div className="col-md-6">
            <div className="tracking__item">
              <div className="tracking__label">Order ID</div>
              <div className="tracking__value">0912841</div>
            </div>

            <div className="tracking__item">
              <div className="tracking__label">Cust. Name</div>
              <div className="tracking__value">Tuyen Ho</div>
            </div>

            <div className="tracking__item">
              <div className="tracking__label">Payment</div>
              <div className="tracking__value">COD</div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="tracking__item">
              <div className="tracking__label">Placement Date</div>
              <div className="tracking__value">13:05 20/05/2019</div>
            </div>

            <div className="tracking__item">
              <div className="tracking__label">Shipping Method</div>
              <div className="tracking__value">Fast</div>
            </div>

            <div className="tracking__item">
              <div className="tracking__label">Total</div>
              <div className="tracking__value ">
                <div className="tracking__price">
                  <strong>175.000</strong>
                  <span>VND</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="tracking__item">
              <div className="tracking__label">Address</div>
              <div className="tracking__value">289 Dinh Bo Linh Binh Thanh, Ho Chi Minh</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShippingInfo;
