import React, { PureComponent } from 'react';
import './style.scss';

class TrackingNav extends PureComponent {
  render() {
    return (
      <nav className="tracking_nav">
        <div className="tracking_nav__content ">
          <div className="tracking_nav__steps">
            <div className="tracking_nav__step active">
              <div className="tracking_nav__num">1</div>
              <div className="tracking_nav__sub">Step 1</div>
              <div className="tracking_nav__text">Order Recieved</div>
            </div>
            <div className="tracking_nav__step ">
              <div className="tracking_nav__num">2</div>
              <div className="tracking_nav__sub">Step 2</div>
              <div className="tracking_nav__text">Order Recieved</div>
            </div>
            <div className="tracking_nav__step ">
              <div className="tracking_nav__num">3</div>
              <div className="tracking_nav__sub">Step 3</div>
              <div className="tracking_nav__text">Order Recieved</div>
            </div>
            <div className="tracking_nav__step">
              <div className="tracking_nav__num">4</div>
              <div className="tracking_nav__sub">Step 4</div>
              <div className="tracking_nav__text">Order Recieved</div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default TrackingNav;
